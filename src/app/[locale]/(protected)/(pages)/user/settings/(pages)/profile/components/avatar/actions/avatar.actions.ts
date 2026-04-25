"use server";
// Vendors
import { headers } from "next/headers";
import { del, put } from "@vercel/blob";
import sharp from "sharp";
// Constants
import {
  ACCEPTED_DECODED_FORMATS,
  ACCEPTED_IMAGE_TYPES,
  AVATAR_CACHE_MAX_AGE,
  AVATAR_MAX_DIMENSION,
  AVATAR_MAX_PIXELS,
  AVATAR_OUTPUT_SIZE,
  AVATAR_WEBP_QUALITY,
  MAX_FILE_SIZE,
} from "../constants/avatar.constants";
// Libs
import { auth } from "@/lib/auth";
// Types
import type {
  DeleteAvatarBlob,
  IsManagedAvatarUrl,
  ProcessAvatarImage,
  UpdateUserImage,
  UploadAvatarAction,
  UploadAvatarBlob,
  ValidateFile,
} from "./types/avatar.actions.types";

const deleteAvatarBlob: DeleteAvatarBlob = async ({ url }) => {
  try {
    await del(url);
  } catch (error) {
    console.error("Failed to delete avatar blob", { error, url });
  }
};

const isManagedAvatarUrl: IsManagedAvatarUrl = ({
  expectedHost,
  url,
  userId,
}) => {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    const safeUserId = encodeURIComponent(userId);
    return (
      parsed.hostname === expectedHost &&
      parsed.pathname.startsWith(`/avatars/${safeUserId}/`)
    );
  } catch {
    return false;
  }
};

const processAvatarImage: ProcessAvatarImage = async ({
  croppedAreaPixels,
  inputBuffer,
}) => {
  try {
    const image = sharp(inputBuffer, {
      failOn: "error",
      limitInputPixels: AVATAR_MAX_PIXELS,
    });
    const metadata = await image.metadata();

    if (!metadata.format || !ACCEPTED_DECODED_FORMATS.has(metadata.format)) {
      return { data: null, error: { code: "INVALID_IMAGE_CONTENT" } };
    }

    if ((metadata.pages ?? 1) > 1) {
      return { data: null, error: { code: "INVALID_IMAGE_CONTENT" } };
    }

    const width = metadata.autoOrient?.width ?? metadata.width;
    const height = metadata.autoOrient?.height ?? metadata.height;

    if (!width || !height) {
      return { data: null, error: { code: "INVALID_IMAGE_CONTENT" } };
    }

    if (
      width > AVATAR_MAX_DIMENSION ||
      height > AVATAR_MAX_DIMENSION ||
      width * height > AVATAR_MAX_PIXELS
    ) {
      return { data: null, error: { code: "IMAGE_DIMENSIONS_TOO_LARGE" } };
    }

    const cropLeft = Math.round(croppedAreaPixels.x);
    const cropTop = Math.round(croppedAreaPixels.y);
    const cropWidth = Math.round(croppedAreaPixels.width);
    const cropHeight = Math.round(croppedAreaPixels.height);

    if (
      cropLeft < 0 ||
      cropTop < 0 ||
      cropWidth <= 0 ||
      cropHeight <= 0 ||
      cropLeft + cropWidth > width ||
      cropTop + cropHeight > height
    ) {
      return { data: null, error: { code: "INVALID_IMAGE_CONTENT" } };
    }

    const outputBuffer = await image
      .rotate()
      .extract({
        height: cropHeight,
        left: cropLeft,
        top: cropTop,
        width: cropWidth,
      })
      .resize(AVATAR_OUTPUT_SIZE, AVATAR_OUTPUT_SIZE, {
        fit: "cover",
        position: "center",
      })
      .webp({ quality: AVATAR_WEBP_QUALITY })
      .toBuffer();

    return { data: { buffer: outputBuffer }, error: null };
  } catch (error) {
    console.error("Failed to process avatar image", { error });
    return { data: null, error: { code: "INVALID_IMAGE_CONTENT" } };
  }
};

const updateUserImage: UpdateUserImage = async ({
  blobUrl,
  requestHeaders,
}) => {
  try {
    await auth.api.updateUser({
      body: { image: blobUrl },
      headers: requestHeaders,
    });
    return { data: {}, error: null };
  } catch (error) {
    console.error("Failed to update user profile with new avatar URL", {
      blobUrl,
      error,
    });
    return { data: null, error: { code: "UPLOAD_FAILED" } };
  }
};

const uploadAvatarBlob: UploadAvatarBlob = async ({ data, userId }) => {
  try {
    const safeUserId = encodeURIComponent(userId);
    const pathname = `avatars/${safeUserId}/${crypto.randomUUID()}.webp`;
    const blob = await put(pathname, data, {
      access: "public",
      addRandomSuffix: false,
      cacheControlMaxAge: AVATAR_CACHE_MAX_AGE,
      contentType: "image/webp",
    });
    return { data: { url: blob.url }, error: null };
  } catch (error) {
    console.error("Failed to upload avatar blob", { error, userId });
    return { data: null, error: { code: "UPLOAD_FAILED" } };
  }
};

const validateFile: ValidateFile = ({ formData }) => {
  const file = formData.get("file");

  if (!(file instanceof File)) {
    return { data: null, error: { code: "NO_FILE" } };
  }

  if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
    return { data: null, error: { code: "INVALID_FILE_TYPE" } };
  }

  if (file.size > MAX_FILE_SIZE) {
    return { data: null, error: { code: "FILE_TOO_LARGE" } };
  }

  return { data: { file }, error: null };
};

const uploadAvatarAction: UploadAvatarAction = async ({
  croppedAreaPixels,
  formData,
}) => {
  try {
    const requestHeaders = await headers();
    const session = await auth.api.getSession({ headers: requestHeaders });

    if (!session?.user?.id) {
      return { data: null, error: { code: "UNAUTHORIZED" } };
    }

    const { user } = session;

    const fileValidation = validateFile({ formData });
    if (fileValidation.error) {
      return { data: null, error: fileValidation.error };
    }

    const inputBuffer = Buffer.from(
      await fileValidation.data.file.arrayBuffer(),
    );

    const processedImage = await processAvatarImage({
      croppedAreaPixels,
      inputBuffer,
    });
    if (processedImage.error) {
      console.error("Avatar image processing failed", {
        errorCode: processedImage.error.code,
        fileSize: fileValidation.data.file.size,
        fileType: fileValidation.data.file.type,
        userId: user.id,
      });
      return { data: null, error: processedImage.error };
    }

    const blobUpload = await uploadAvatarBlob({
      data: processedImage.data.buffer,
      userId: user.id,
    });
    if (blobUpload.error) {
      return { data: null, error: blobUpload.error };
    }

    const userUpdate = await updateUserImage({
      blobUrl: blobUpload.data.url,
      requestHeaders,
    });
    if (userUpdate.error) {
      await deleteAvatarBlob({ url: blobUpload.data.url });
      return { data: null, error: userUpdate.error };
    }

    if (
      isManagedAvatarUrl({
        expectedHost: new URL(blobUpload.data.url).hostname,
        url: user.image,
        userId: user.id,
      })
    ) {
      await deleteAvatarBlob({ url: user.image! });
    }

    return { data: { url: blobUpload.data.url }, error: null };
  } catch (error) {
    console.error("Unexpected error during avatar upload", { error });
    return { data: null, error: { code: "UPLOAD_FAILED" } };
  }
};

export { uploadAvatarAction };
