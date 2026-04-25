// Vendors
import { toast } from "sonner";
// Actions
import { uploadAvatarAction } from "../actions/avatar.actions";
// Auth
import { authClient } from "@/lib/auth-client";
// Constants
import { DEFAULT_CROP, DEFAULT_ZOOM } from "../constants/avatar.constants";
// Schemas
import { getAvatarSchema } from "../schemas/avatar.schema";
// Types
import type {
  AvatarHandlersProps,
  AvatarHandlersReturn,
  HandleCropChange,
  HandleCropComplete,
  HandleCropDialogClose,
  HandleCropDialogOpenChange,
  HandleCropDialogUpload,
  HandleInputChange,
  HandleZoomChange,
} from "./types/avatar.handlers.types";

const handleCropChange: HandleCropChange = ({ crop, setCrop }) => {
  setCrop(crop);
};

const handleCropComplete: HandleCropComplete = ({
  croppedAreaPixels,
  setCroppedAreaPixels,
}) => {
  setCroppedAreaPixels(croppedAreaPixels);
};

const handleCropDialogClose: HandleCropDialogClose = ({
  inputRef,
  previewUrl,
  setCrop,
  setCropDialogOpen,
  setCroppedAreaPixels,
  setErrorMessage,
  setPreviewUrl,
  setSelectedFile,
  setZoom,
}) => {
  if (previewUrl) {
    URL.revokeObjectURL(previewUrl);
  }
  setCrop(DEFAULT_CROP);
  setCropDialogOpen(false);
  setCroppedAreaPixels(null);
  setErrorMessage(null);
  setPreviewUrl(null);
  setSelectedFile(null);
  setZoom(DEFAULT_ZOOM);
  if (inputRef.current) {
    inputRef.current.value = "";
  }
};

const handleCropDialogOpenChange: HandleCropDialogOpenChange = ({
  inputRef,
  open,
  previewUrl,
  setCrop,
  setCropDialogOpen,
  setCroppedAreaPixels,
  setErrorMessage,
  setPreviewUrl,
  setSelectedFile,
  setZoom,
}) => {
  setCropDialogOpen(open);
  if (!open) {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setCrop(DEFAULT_CROP);
    setCroppedAreaPixels(null);
    setErrorMessage(null);
    setPreviewUrl(null);
    setSelectedFile(null);
    setZoom(DEFAULT_ZOOM);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }
};

const handleCropDialogUpload: HandleCropDialogUpload = async ({
  croppedAreaPixels,
  inputRef,
  previewUrl,
  refetch,
  selectedFile,
  setCrop,
  setCropDialogOpen,
  setCroppedAreaPixels,
  setErrorMessage,
  setIsUploading,
  setPreviewUrl,
  setSelectedFile,
  setZoom,
  t,
}) => {
  if (!selectedFile) {
    setErrorMessage(t("errors.NO_FILE"));
    return;
  }

  if (!croppedAreaPixels) {
    setErrorMessage(t("errors.UPLOAD_FAILED"));
    return;
  }

  setIsUploading(true);
  setErrorMessage(null);

  try {
    const formData = new FormData();
    formData.append("file", selectedFile);

    const result = await uploadAvatarAction({ croppedAreaPixels, formData });

    if (result.error) {
      setErrorMessage(t(`errors.${result.error.code}`));
      return;
    }

    await refetch();

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    setCrop(DEFAULT_CROP);
    setCropDialogOpen(false);
    setCroppedAreaPixels(null);
    setErrorMessage(null);
    setPreviewUrl(null);
    setSelectedFile(null);
    setZoom(DEFAULT_ZOOM);

    if (inputRef.current) {
      inputRef.current.value = "";
    }

    toast.success(t("handlers.upload.success"));
  } catch (error) {
    console.error(error);
    setErrorMessage(t("handlers.upload.errors.UPLOAD_FAILED"));
  } finally {
    setIsUploading(false);
  }
};

const handleInputChange: HandleInputChange = async ({
  event,
  previewUrl,
  setCrop,
  setCropDialogOpen,
  setCroppedAreaPixels,
  setErrorMessage,
  setPreviewUrl,
  setSelectedFile,
  setZoom,
  t,
}) => {
  const file = event.target.files?.[0];

  if (!file) {
    return;
  }

  const schema = getAvatarSchema(t);
  const result = schema.safeParse({ file });

  if (!result.success) {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setCrop(DEFAULT_CROP);
    setCropDialogOpen(false);
    setCroppedAreaPixels(null);
    setErrorMessage(null);
    setPreviewUrl(null);
    setSelectedFile(null);
    setZoom(DEFAULT_ZOOM);
    event.target.value = "";
    return;
  }

  if (previewUrl) {
    URL.revokeObjectURL(previewUrl);
  }

  const nextPreviewUrl = URL.createObjectURL(file);

  setCrop(DEFAULT_CROP);
  setCropDialogOpen(true);
  setErrorMessage(null);
  setPreviewUrl(nextPreviewUrl);
  setSelectedFile(file);
  setZoom(DEFAULT_ZOOM);
};

const handleZoomChange: HandleZoomChange = ({ setZoom, zoom }) => {
  setZoom(zoom);
};

const AvatarHandlers = ({
  croppedAreaPixels,
  inputRef,
  previewUrl,
  refetch,
  selectedFile,
  setCrop,
  setCropDialogOpen,
  setCroppedAreaPixels,
  setErrorMessage,
  setIsUploading,
  setPreviewUrl,
  setSelectedFile,
  setZoom,
  t,
}: AvatarHandlersProps): AvatarHandlersReturn => {
  return {
    handleCropChange: (crop) => handleCropChange({ crop, setCrop }),
    handleCropComplete: (_croppedArea, croppedAreaPixels) =>
      handleCropComplete({ croppedAreaPixels, setCroppedAreaPixels }),
    handleCropDialogClose: () =>
      handleCropDialogClose({
        inputRef,
        previewUrl,
        setCrop,
        setCropDialogOpen,
        setCroppedAreaPixels,
        setErrorMessage,
        setPreviewUrl,
        setSelectedFile,
        setZoom,
      }),
    handleCropDialogOpenChange: (open) =>
      handleCropDialogOpenChange({
        inputRef,
        open,
        previewUrl,
        setCrop,
        setCropDialogOpen,
        setCroppedAreaPixels,
        setErrorMessage,
        setPreviewUrl,
        setSelectedFile,
        setZoom,
      }),
    handleCropDialogUpload: () =>
      handleCropDialogUpload({
        croppedAreaPixels,
        inputRef,
        previewUrl,
        refetch,
        selectedFile,
        setCrop,
        setCropDialogOpen,
        setCroppedAreaPixels,
        setErrorMessage,
        setIsUploading,
        setPreviewUrl,
        setSelectedFile,
        setZoom,
        t,
      }),
    handleInputChange: (event) =>
      handleInputChange({
        event,
        previewUrl,
        setCrop,
        setCropDialogOpen,
        setCroppedAreaPixels,
        setErrorMessage,
        setPreviewUrl,
        setSelectedFile,
        setZoom,
        t,
      }),
    handleZoomChange: (zoom) => handleZoomChange({ setZoom, zoom }),
  };
};

export { AvatarHandlers };
