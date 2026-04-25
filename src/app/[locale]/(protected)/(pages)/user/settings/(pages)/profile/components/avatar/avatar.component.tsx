"use client";
// Vendors
import React from "react";
import Cropper from "react-easy-crop";
import type { Area } from "react-easy-crop";
// Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AvatarSkeleton } from "./components/avatar-skeleton/avatar-skeleton.component";
import { Button } from "@/components/ui/button";
import { ButtonLoading } from "@/components/ui/button-loading";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FieldError } from "@/components/ui/field";
// Hooks
import { useAvatar } from "./hook/use-avatar.hook";
// Icons
import { Camera } from "lucide-react";

const AvatarCard = () => {
  const {
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
  } = useAvatar();

  if (isSessionPending) {
    return <AvatarSkeleton />;
  }

  return (
    <React.Fragment>
      <Card className="pb-0">
        <div className="flex flex-row items-start justify-between gap-6 px-6">
          <CardHeader className="grow px-0">
            <CardTitle>
              <h2>{t("ui.card.header.title")}</h2>
            </CardTitle>
            <CardDescription className="max-w-xl">
              {t("ui.card.header.description")}
            </CardDescription>
          </CardHeader>
          <CardContent className="px-0">
            <div className="">
              <input
                ref={inputRef}
                accept="image/jpeg,image/png,image/webp"
                aria-label={t("ui.card.content.input.label")}
                className="sr-only"
                onChange={handleInputChange}
                type="file"
              />
              <button
                aria-label={t("ui.card.content.trigger.label")}
                className="group relative cursor-pointer rounded-full disabled:pointer-events-none disabled:opacity-50"
                disabled={isUploading}
                onClick={() => inputRef.current?.click()}
                type="button"
              >
                <Avatar className="size-20">
                  <AvatarImage
                    alt={t("ui.card.content.avatar.alt")}
                    src={avatarPreview ?? undefined}
                    referrerPolicy="no-referrer"
                  />
                  <AvatarFallback className="text-lg font-medium">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/50 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Camera className="size-5 text-white" />
                </div>
                {isUploading && (
                  <div className="absolute inset-0 rounded-full bg-black/40" />
                )}
              </button>
            </div>
          </CardContent>
        </div>
        <CardFooter className="border-t px-6 pb-4 [.border-t]:pt-4">
          <div className="flex flex-col gap-1">
            <p className="text-muted-foreground text-sm">
              {t("ui.card.footer.description")}
            </p>
            {errorMessage && <FieldError>{errorMessage}</FieldError>}
          </div>
        </CardFooter>
      </Card>
      <Dialog open={cropDialogOpen} onOpenChange={handleCropDialogOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("ui.dialog.content.header.title")}</DialogTitle>
            <DialogDescription>
              {t("ui.dialog.content.header.description")}
            </DialogDescription>
          </DialogHeader>
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg">
            <Cropper
              aspect={1}
              crop={crop}
              cropShape="round"
              image={previewUrl ?? undefined}
              onCropChange={handleCropChange}
              onCropComplete={handleCropComplete}
              onZoomChange={handleZoomChange}
              showGrid={false}
              zoom={zoom}
            />
          </div>
          <DialogFooter>
            <Button
              disabled={isUploading}
              onClick={handleCropDialogClose}
              variant="outline"
            >
              {t("ui.dialog.content.footer.actions.cancelButton.label")}
            </Button>
            <ButtonLoading
              loading={isUploading}
              onClick={handleCropDialogUpload}
            >
              {t("ui.dialog.content.footer.actions.submitButton.label")}
            </ButtonLoading>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export { AvatarCard };
