// Vendors
import { toast } from "sonner";
// Auth
import { authClient } from "@/lib/auth-client";
// Types
import type {
  HandleSubmit,
  NameHandlersProps,
  NameHandlersReturn,
} from "./types/name.handlers.types";

const handleSubmit: HandleSubmit = async ({ form, refetch, t, values }) => {
  try {
    const { error } = await authClient.updateUser({
      name: values.name,
    });

    if (error) {
      toast.error(t("handlers.submit.error"));
      return;
    }

    refetch();
    toast.success(t("handlers.submit.success"));
    form.reset(values);
  } catch (error) {
    console.error(error);
    toast.error(t("handlers.submit.error"));
  }
};

const NameHandlers = ({
  form,
  refetch,
  t,
}: NameHandlersProps): NameHandlersReturn => {
  return {
    handleSubmit: (values) =>
      handleSubmit({
        form,
        refetch,
        t,
        values,
      }),
  };
};

export { NameHandlers };
