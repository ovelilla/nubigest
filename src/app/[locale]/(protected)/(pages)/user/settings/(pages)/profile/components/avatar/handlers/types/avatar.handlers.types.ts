// Auth
import { authClient } from "@/lib/auth-client";
// Types
import type { Area } from "react-easy-crop";
import type { _Translator } from "next-intl";
import type { ChangeEvent } from "react";
import type { Dispatch, RefObject, SetStateAction } from "react";

type AvatarHandlersProps = {
  croppedAreaPixels: Area | null;
  inputRef: RefObject<HTMLInputElement | null>;
  previewUrl: string | null;
  refetch: ReturnType<typeof authClient.useSession>["refetch"];
  selectedFile: File | null;
  setCrop: Dispatch<SetStateAction<{ x: number; y: number }>>;
  setCropDialogOpen: Dispatch<SetStateAction<boolean>>;
  setCroppedAreaPixels: Dispatch<SetStateAction<Area | null>>;
  setErrorMessage: Dispatch<SetStateAction<string | null>>;
  setIsUploading: Dispatch<SetStateAction<boolean>>;
  setPreviewUrl: Dispatch<SetStateAction<string | null>>;
  setSelectedFile: Dispatch<SetStateAction<File | null>>;
  setZoom: Dispatch<SetStateAction<number>>;
  t: _Translator;
};

type AvatarHandlersReturn = {
  handleCropChange: (crop: { x: number; y: number }) => void;
  handleCropComplete: (croppedArea: Area, croppedAreaPixels: Area) => void;
  handleCropDialogClose: () => void;
  handleCropDialogOpenChange: (open: boolean) => void;
  handleCropDialogUpload: () => Promise<void>;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  handleZoomChange: (zoom: number) => void;
};

type HandleCropChange = (props: {
  crop: { x: number; y: number };
  setCrop: Dispatch<SetStateAction<{ x: number; y: number }>>;
}) => void;

type HandleCropComplete = (props: {
  croppedAreaPixels: Area;
  setCroppedAreaPixels: Dispatch<SetStateAction<Area | null>>;
}) => void;

type HandleCropDialogClose = (props: {
  inputRef: RefObject<HTMLInputElement | null>;
  previewUrl: string | null;
  setCrop: Dispatch<SetStateAction<{ x: number; y: number }>>;
  setCropDialogOpen: Dispatch<SetStateAction<boolean>>;
  setCroppedAreaPixels: Dispatch<SetStateAction<Area | null>>;
  setErrorMessage: Dispatch<SetStateAction<string | null>>;
  setPreviewUrl: Dispatch<SetStateAction<string | null>>;
  setSelectedFile: Dispatch<SetStateAction<File | null>>;
  setZoom: Dispatch<SetStateAction<number>>;
}) => void;

type HandleCropDialogOpenChange = (props: {
  inputRef: RefObject<HTMLInputElement | null>;
  open: boolean;
  previewUrl: string | null;
  setCrop: Dispatch<SetStateAction<{ x: number; y: number }>>;
  setCropDialogOpen: Dispatch<SetStateAction<boolean>>;
  setCroppedAreaPixels: Dispatch<SetStateAction<Area | null>>;
  setErrorMessage: Dispatch<SetStateAction<string | null>>;
  setPreviewUrl: Dispatch<SetStateAction<string | null>>;
  setSelectedFile: Dispatch<SetStateAction<File | null>>;
  setZoom: Dispatch<SetStateAction<number>>;
}) => void;

type HandleCropDialogUpload = (props: {
  croppedAreaPixels: Area | null;
  inputRef: RefObject<HTMLInputElement | null>;
  previewUrl: string | null;
  refetch: ReturnType<typeof authClient.useSession>["refetch"];
  selectedFile: File | null;
  setCrop: Dispatch<SetStateAction<{ x: number; y: number }>>;
  setCropDialogOpen: Dispatch<SetStateAction<boolean>>;
  setCroppedAreaPixels: Dispatch<SetStateAction<Area | null>>;
  setErrorMessage: Dispatch<SetStateAction<string | null>>;
  setIsUploading: Dispatch<SetStateAction<boolean>>;
  setPreviewUrl: Dispatch<SetStateAction<string | null>>;
  setSelectedFile: Dispatch<SetStateAction<File | null>>;
  setZoom: Dispatch<SetStateAction<number>>;
  t: _Translator;
}) => Promise<void>;

type HandleInputChange = (props: {
  event: ChangeEvent<HTMLInputElement>;
  previewUrl: string | null;
  setCrop: Dispatch<SetStateAction<{ x: number; y: number }>>;
  setCropDialogOpen: Dispatch<SetStateAction<boolean>>;
  setCroppedAreaPixels: Dispatch<SetStateAction<Area | null>>;
  setErrorMessage: Dispatch<SetStateAction<string | null>>;
  setPreviewUrl: Dispatch<SetStateAction<string | null>>;
  setSelectedFile: Dispatch<SetStateAction<File | null>>;
  setZoom: Dispatch<SetStateAction<number>>;
  t: _Translator;
}) => Promise<void>;

type HandleZoomChange = (props: {
  setZoom: Dispatch<SetStateAction<number>>;
  zoom: number;
}) => void;

export type {
  AvatarHandlersProps,
  AvatarHandlersReturn,
  HandleCropChange,
  HandleCropComplete,
  HandleCropDialogClose,
  HandleCropDialogOpenChange,
  HandleCropDialogUpload,
  HandleInputChange,
  HandleZoomChange,
};
