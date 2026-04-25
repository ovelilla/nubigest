// Vendors
import { toast } from "sonner";
// Auth
import { authClient } from "@/lib/auth-client";
// Types
import type {
  HandleSubmit,
  UsernameHandlersProps,
  UsernameHandlersReturn,
} from "./types/username.handlers.types";

const handleSubmit: HandleSubmit = async ({
  form,
  refetch,
  sessionData,
  t,
  values,
}) => {
  try {
    const nextUsername = values.username.trim().toLowerCase();
    const currentUsername = sessionData?.user?.username?.trim().toLowerCase();

    if (nextUsername === currentUsername) {
      form.reset({ username: values.username });
      return;
    }

    const { data } = await authClient.isUsernameAvailable({
      username: nextUsername,
    });

    if (!data?.available) {
      form.setError("username", {
        type: "manual",
        message: t("handlers.submit.usernameUnavailable"),
      });
      return;
    }

    const { error } = await authClient.updateUser({
      username: nextUsername,
    });

    if (error) {
      toast.error(t("handlers.submit.error"));
      return;
    }

    refetch();
    toast.success(t("handlers.submit.success"));
    form.reset({ username: nextUsername });
  } catch (error) {
    console.error(error);
    toast.error(t("handlers.submit.error"));
  }
};

const UsernameHandlers = ({
  form,
  refetch,
  sessionData,
  t,
}: UsernameHandlersProps): UsernameHandlersReturn => {
  return {
    handleSubmit: (values) =>
      handleSubmit({
        form,
        refetch,
        sessionData,
        t,
        values,
      }),
  };
};

export { UsernameHandlers };
