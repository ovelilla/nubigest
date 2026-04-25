// Vendors
import { toast } from "sonner";
// Auth
import { authClient } from "@/lib/auth-client";
// Types
import type {
  HandleSubmit,
  EmailHandlersProps,
  EmailHandlersReturn,
} from "./types/email.handlers.types";

const handleSubmit: HandleSubmit = async ({ form, sessionData, t, values }) => {
  try {
    const nextEmail = values.newEmail.trim().toLowerCase();
    const currentEmail = sessionData?.user?.email?.trim().toLowerCase();

    if (nextEmail === currentEmail) {
      form.reset({ newEmail: values.newEmail });
      return;
    }

    const { error } = await authClient.changeEmail({
      newEmail: nextEmail,
      callbackURL: "/user/settings/profile",
    });

    if (error) {
      toast.error(t("handlers.submit.error"));
      return;
    }

    toast.success(t("handlers.submit.success"));
    form.reset({ newEmail: nextEmail });
  } catch (error) {
    console.error(error);
    toast.error(t("handlers.submit.error"));
  }
};

const EmailHandlers = ({
  form,
  sessionData,
  t,
}: EmailHandlersProps): EmailHandlersReturn => {
  return {
    handleSubmit: (values) =>
      handleSubmit({
        form,
        sessionData,
        t,
        values,
      }),
  };
};

export { EmailHandlers };
