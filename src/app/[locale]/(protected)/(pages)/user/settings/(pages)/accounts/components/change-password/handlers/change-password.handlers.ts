// Vendors
import { toast } from "sonner";
// Auth
import { authClient } from "@/lib/auth-client";
// Types
import type {
  ChangePasswordHandlersProps,
  ChangePasswordHandlersReturn,
  HandleDialogOpenChange,
  HandleSubmit,
} from "./types/change-password.handlers.types";

const handleDialogOpenChange: HandleDialogOpenChange = ({
  form,
  open,
  onOpenChange,
}) => {
  if (!open) {
    form.reset();
  }
  onOpenChange(open);
};

const handleSubmit: HandleSubmit = async ({
  form,
  onOpenChange,
  onSuccess,
  tChangePassword,
  tErrors,
  values,
}) => {
  try {
    const { error } = await authClient.changePassword({
      newPassword: values.newPassword,
      currentPassword: values.currentPassword,
      revokeOtherSessions: true,
    });

    if (error) {
      if (error.code === "INVALID_PASSWORD") {
        form.setError("currentPassword", {
          type: "server",
          message: tErrors(error.code, {
            default: tErrors("DEFAULT"),
          }),
        });
        return;
      }

      if (error.code && tErrors.has(error.code)) {
        toast.error(tErrors(error.code));
        return;
      }

      toast.error(tChangePassword("handlers.submit.error.generic"));
      return;
    }

    await onSuccess();

    form.reset();
    onOpenChange(false);

    toast.success(tChangePassword("handlers.submit.success"));
  } catch (error) {
    console.error(error);
    toast.error(tChangePassword("handlers.submit.error.generic"));
  }
};

const ChangePasswordHandlers = ({
  form,
  onOpenChange,
  onSuccess,
  tChangePassword,
  tErrors,
}: ChangePasswordHandlersProps): ChangePasswordHandlersReturn => ({
  handleDialogOpenChange: (open) =>
    handleDialogOpenChange({ form, open, onOpenChange }),
  handleSubmit: (values) =>
    handleSubmit({
      form,
      onOpenChange,
      onSuccess,
      tChangePassword,
      tErrors,
      values,
    }),
});

export { ChangePasswordHandlers };
