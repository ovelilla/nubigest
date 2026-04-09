// Vendors
import { toast } from "sonner";
// Actions
import { setPasswordAction } from "../actions/set-password.actions";
// Types
import type {
  SetPasswordHandlersProps,
  SetPasswordHandlersReturn,
  HandleDialogOpenChange,
  HandleSubmit,
} from "./types/set-password.handlers.types";

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
  t,
  values,
}) => {
  try {
    const result = await setPasswordAction({ newPassword: values.password });

    if (!result.status) {
      toast.error(t("handlers.submit.error.generic"));
      return;
    }

    await onSuccess();

    form.reset();
    onOpenChange(false);

    toast.success(t("handlers.submit.success"));
  } catch (error) {
    console.error(error);
    toast.error(t("handlers.submit.error.generic"));
  }
};

const SetPasswordHandlers = ({
  form,
  onOpenChange,
  onSuccess,
  t,
}: SetPasswordHandlersProps): SetPasswordHandlersReturn => ({
  handleDialogOpenChange: (open) =>
    handleDialogOpenChange({ form, open, onOpenChange }),
  handleSubmit: (values) =>
    handleSubmit({
      form,
      onOpenChange,
      onSuccess,
      t,
      values,
    }),
});

export { SetPasswordHandlers };
