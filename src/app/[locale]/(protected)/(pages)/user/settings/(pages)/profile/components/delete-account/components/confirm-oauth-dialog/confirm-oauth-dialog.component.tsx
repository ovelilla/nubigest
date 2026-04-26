"use client";
// Components
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ButtonLoading } from "@/components/ui/button-loading";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// Hooks
import { useConfirmOAuthDialog } from "./hook/use-confirm-oauth-dialog.hook";
// Types
import type { ConfirmOAuthDialogProps } from "./types/confirm-oauth-dialog.component.types";

const ConfirmOAuthDialog = ({
  isDeleting,
  isOpen,
  onOpenChange,
  onSubmit,
}: ConfirmOAuthDialogProps) => {
  const {
    confirmation,
    handleOpenChange,
    handleSubmit,
    isConfirmed,
    phrase,
    setConfirmation,
    t,
  } = useConfirmOAuthDialog({ onOpenChange, onSubmit });

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("ui.oauthDialog.content.header.title")}</DialogTitle>
          <DialogDescription>
            {t("ui.oauthDialog.content.header.description")}
          </DialogDescription>
        </DialogHeader>
        <Alert className="bg-destructive/10 border-0">
          <AlertDescription className="text-destructive">
            {t("ui.oauthDialog.content.alert")}
          </AlertDescription>
        </Alert>
        <div className="space-y-2">
          <Label htmlFor="confirm-delete">
            {t.rich("ui.oauthDialog.content.confirmLabel", {
              phrase: () => <strong>{phrase}</strong>,
            })}
          </Label>
          <Input
            id="confirm-delete"
            value={confirmation}
            onChange={(e) => setConfirmation(e.target.value)}
            placeholder={phrase}
            autoComplete="off"
          />
        </div>
        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => handleOpenChange(false)}
            disabled={isDeleting}
          >
            {t("ui.oauthDialog.content.cancelButton")}
          </Button>
          <ButtonLoading
            type="button"
            variant="destructive"
            disabled={!isConfirmed}
            loading={isDeleting}
            onClick={handleSubmit}
          >
            {t("ui.oauthDialog.content.submitButton")}
          </ButtonLoading>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { ConfirmOAuthDialog };
