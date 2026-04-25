// Vendors
import { useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";
// Auth
import { authClient } from "@/lib/auth-client";
// Constants
import { DEFAULT_CROP, DEFAULT_ZOOM } from "../constants/avatar.constants";
// Handlers
import { AvatarHandlers } from "../handlers/avatar.handlers";
// Utils
import { getInitials } from "../utils/get-initials/get-initials.util";
// Types
import type { Area } from "react-easy-crop";

const useAvatar = () => {
  const [crop, setCrop] = useState(DEFAULT_CROP);
  const [cropDialogOpen, setCropDialogOpen] = useState(false);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const {
    data: sessionData,
    isPending: isSessionPending,
    refetch,
  } = authClient.useSession();

  const t = useTranslations("profileSettings.components.avatar");

  const initials = useMemo(
    () => getInitials(sessionData?.user?.name),
    [sessionData?.user?.name],
  );

  const avatarPreview = sessionData?.user?.image ?? null;

  const {
    handleCropChange,
    handleCropComplete,
    handleCropDialogClose,
    handleCropDialogOpenChange,
    handleCropDialogUpload,
    handleInputChange,
    handleZoomChange,
  } = AvatarHandlers({
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
  });

  return {
    avatarPreview,
    crop,
    cropDialogOpen,
    errorMessage,
    handleCropChange,
    handleCropComplete,
    handleCropDialogClose,
    handleCropDialogOpenChange,
    handleCropDialogUpload,
    handleInputChange,
    handleZoomChange,
    initials,
    inputRef,
    isSessionPending,
    isUploading,
    previewUrl,
    t,
    zoom,
  };
};

export { useAvatar };
