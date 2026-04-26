// Vendors
import { useState } from "react";
import { useTranslations } from "next-intl";
// Handlers
import { ConfirmOAuthDialogHandlers } from "../handlers/confirm-oauth-dialog.handlers";

type UseConfirmOAuthDialogProps = {
  onOpenChange: (open: boolean) => void;
  onSubmit: () => Promise<void>;
};

const useConfirmOAuthDialog = ({
  onOpenChange,
  onSubmit,
}: UseConfirmOAuthDialogProps) => {
  const t = useTranslations("profileSettings.components.deleteAccount");
  const [confirmation, setConfirmation] = useState("");

  const phrase = t("ui.oauthDialog.content.confirmationPhrase");
  const isConfirmed = confirmation === phrase;

  const { handleOpenChange, handleSubmit } = ConfirmOAuthDialogHandlers({
    isConfirmed,
    onOpenChange,
    onSubmit,
    setConfirmation,
  });

  return {
    confirmation,
    handleOpenChange,
    handleSubmit,
    isConfirmed,
    phrase,
    setConfirmation,
    t,
  };
};

export { useConfirmOAuthDialog };
