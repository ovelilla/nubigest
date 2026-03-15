// Vendors
import { toast } from "sonner";
// Auth
import { authClient } from "@/lib/auth-client";
// Constants
import { DEFAULT_REDIRECT } from "@/constants/routes.constants";
// Types
import type {
  BackupHandlersProps,
  BackupHandlersReturn,
  SubmitHandler,
} from "./types/backup.handlers.types";

const submitHandler: SubmitHandler = async ({
  form,
  router,
  setLoading,
  tBackup,
  tTwoFactor,
  values,
}) => {
  try {
    setLoading(true);

    const { error } = await authClient.twoFactor.verifyBackupCode({
      code: values.code,
      trustDevice: values.trustDevice,
    });

    if (error) {
      const key = `errors.${error.code ?? ""}`;
      const message = tTwoFactor.has(key)
        ? tTwoFactor(key)
        : tBackup("handlers.submit.error.generic");
      toast.error(message);
      form.setValue("code", "");
      return;
    }

    toast.success(tBackup("handlers.submit.success"));
    form.reset();
    router.push(DEFAULT_REDIRECT);
  } catch (error) {
    console.error(error);
    toast.error(tBackup("handlers.submit.error.generic"));
  } finally {
    setLoading(false);
  }
};

const BackupHandlers = ({
  form,
  router,
  setLoading,
  tBackup,
  tTwoFactor,
}: BackupHandlersProps): BackupHandlersReturn => {
  return {
    handleSubmit: (values) =>
      submitHandler({
        form,
        router,
        setLoading,
        tBackup,
        tTwoFactor,
        values,
      }),
  };
};

export { BackupHandlers };
