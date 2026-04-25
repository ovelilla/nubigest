// Vendors
import { toast } from "sonner";
// Auth
import { authClient } from "@/lib/auth-client";
// Types
import type {
  DeleteAccountHandlersProps,
  DeleteAccountHandlersReturn,
  HandleDeleteClick,
  HandleDialogOpenChange,
  HandleDialogOpenChangeComplete,
  HandleOAuthDialogOpenChange,
  HandleOAuthDialogSubmit,
  HandleSubmit,
} from "./types/delete-account.handlers.types";

const handleDeleteClick: HandleDeleteClick = async ({
  hasPassword,
  setIsDialogOpen,
  setIsOAuthDialogOpen,
}) => {
  if (hasPassword) {
    setIsDialogOpen(true);
    return;
  }

  setIsOAuthDialogOpen(true);
};

const handleDialogOpenChange: HandleDialogOpenChange = ({
  open,
  setIsDialogOpen,
}) => {
  setIsDialogOpen(open);
};

const handleDialogOpenChangeComplete: HandleDialogOpenChangeComplete = ({
  form,
  open,
}) => {
  if (!open) {
    form.reset();
  }
};

const handleOAuthDialogOpenChange: HandleOAuthDialogOpenChange = ({
  open,
  setIsOAuthDialogOpen,
}) => {
  setIsOAuthDialogOpen(open);
};

const handleOAuthDialogSubmit: HandleOAuthDialogSubmit = async ({
  setIsDeleting,
  setIsOAuthDialogOpen,
  t,
}) => {
  setIsDeleting(true);
  try {
    const { error } = await authClient.deleteUser({
      callbackURL: "/account-deleted",
    });

    if (error) {
      toast.error(t("handlers.deleteClick.error"));
      return;
    }

    setIsOAuthDialogOpen(false);
    toast.success(t("handlers.deleteClick.emailSent"));
  } catch (error) {
    console.error(error);
    toast.error(t("handlers.deleteClick.error"));
  } finally {
    setIsDeleting(false);
  }
};

const handleSubmit: HandleSubmit = async ({ setIsDialogOpen, t, values }) => {
  try {
    const { error } = await authClient.deleteUser({
      password: values.password,
      callbackURL: "/account-deleted",
    });

    if (error) {
      toast.error(t("handlers.submit.error"));
      return;
    }

    setIsDialogOpen(false);
    toast.success(t("handlers.deleteClick.emailSent"));
  } catch (error) {
    console.error(error);
    toast.error(t("handlers.submit.error"));
  }
};

const DeleteAccountHandlers = ({
  form,
  hasPassword,
  setIsDeleting,
  setIsDialogOpen,
  setIsOAuthDialogOpen,
  t,
}: DeleteAccountHandlersProps): DeleteAccountHandlersReturn => ({
  handleDeleteClick: () =>
    handleDeleteClick({
      hasPassword,
      setIsDeleting,
      setIsDialogOpen,
      setIsOAuthDialogOpen,
      t,
    }),
  handleDialogOpenChange: (open) =>
    handleDialogOpenChange({ open, setIsDialogOpen }),
  handleDialogOpenChangeComplete: (open) =>
    handleDialogOpenChangeComplete({ form, open }),
  handleOAuthDialogOpenChange: (open) =>
    handleOAuthDialogOpenChange({ open, setIsOAuthDialogOpen }),
  handleOAuthDialogSubmit: () =>
    handleOAuthDialogSubmit({ setIsDeleting, setIsOAuthDialogOpen, t }),
  handleSubmit: (values) => handleSubmit({ setIsDialogOpen, t, values }),
});

export { DeleteAccountHandlers };
