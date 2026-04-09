// Vendors
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
// Auth
import { authClient } from "@/lib/auth-client";
// Constants
import { DEFAULT_VALUES } from "../constants/change-password.constants";
// Handlers
import { ChangePasswordHandlers } from "../handlers/change-password.handlers";
// Schemas
import { getChangePasswordSchema } from "../schemas/change-password.schema";
// Types
import type { ChangePasswordHookProps } from "./types/change-password.hook.types";
import type { ChangePasswordSchema } from "../schemas/types/change-password.schema.types";

const ChangePasswordHook = ({
  onOpenChange,
  onSuccess,
}: ChangePasswordHookProps) => {
  const tChangePassword = useTranslations(
    "accountsSettings.components.changePassword",
  );
  const tErrors = useTranslations("root.errors");

  const changePasswordSchema = getChangePasswordSchema(tChangePassword);

  const form = useForm<ChangePasswordSchema>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const { data: sessionData, isPending: isPendingSession } =
    authClient.useSession();

  const { handleDialogOpenChange, handleSubmit } = ChangePasswordHandlers({
    form,
    onOpenChange,
    onSuccess,
    tChangePassword,
    tErrors,
  });

  return {
    form,
    handleDialogOpenChange,
    handleSubmit,
    isPendingSession,
    sessionData,
    t: tChangePassword,
  };
};

export { ChangePasswordHook };
