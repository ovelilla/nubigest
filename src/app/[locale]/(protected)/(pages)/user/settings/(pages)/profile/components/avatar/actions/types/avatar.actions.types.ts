// Vendors
import type { Area } from "react-easy-crop";

type ActionResult<TData extends object, TErrorCode extends string> =
  | { data: TData; error: null }
  | { data: null; error: { code: TErrorCode } };

type DeleteAvatarBlob = (props: { url: string }) => Promise<void>;

type IsManagedAvatarUrl = (props: {
  expectedHost: string;
  url: string | null | undefined;
  userId: string;
}) => boolean;

type ProcessAvatarImage = (props: {
  croppedAreaPixels: Area;
  inputBuffer: Buffer;
}) => Promise<ProcessAvatarImageResult>;

type ProcessAvatarImageResult = ActionResult<
  { buffer: Buffer },
  "INVALID_IMAGE_CONTENT" | "IMAGE_DIMENSIONS_TOO_LARGE"
>;

type UpdateUserImage = (props: {
  blobUrl: string;
  requestHeaders: Headers;
}) => Promise<UpdateUserImageResult>;

type UpdateUserImageResult = ActionResult<
  Record<string, never>,
  "UPLOAD_FAILED"
>;

type UploadAvatarAction = (props: {
  croppedAreaPixels: Area;
  formData: FormData;
}) => Promise<ActionResult<{ url: string }, UploadAvatarErrorCode>>;

type UploadAvatarBlob = (props: {
  data: Buffer;
  userId: string;
}) => Promise<UploadAvatarBlobResult>;

type UploadAvatarBlobResult = ActionResult<{ url: string }, "UPLOAD_FAILED">;

type UploadAvatarErrorCode =
  | "FILE_TOO_LARGE"
  | "IMAGE_DIMENSIONS_TOO_LARGE"
  | "INVALID_FILE_TYPE"
  | "INVALID_IMAGE_CONTENT"
  | "NO_FILE"
  | "UNAUTHORIZED"
  | "UPLOAD_FAILED";

type ValidateFile = (props: { formData: FormData }) => ValidateFileResult;

type ValidateFileResult = ActionResult<
  { file: File },
  "NO_FILE" | "INVALID_FILE_TYPE" | "FILE_TOO_LARGE"
>;

export type {
  ActionResult,
  Area,
  DeleteAvatarBlob,
  IsManagedAvatarUrl,
  ProcessAvatarImage,
  ProcessAvatarImageResult,
  UpdateUserImage,
  UpdateUserImageResult,
  UploadAvatarAction,
  UploadAvatarBlob,
  UploadAvatarBlobResult,
  UploadAvatarErrorCode,
  ValidateFile,
  ValidateFileResult,
};
