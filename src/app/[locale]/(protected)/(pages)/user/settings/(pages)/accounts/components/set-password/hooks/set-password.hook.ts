// Vendors
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
// Auth
import { authClient } from "@/lib/auth-client";
// Constants
import { DEFAULT_VALUES } from "../constants/set-password.constants";
// Handlers
import { SetPasswordHandlers } from "../handlers/set-password.handlers";
// Schemas
import { getSetPasswordSchema } from "../schemas/set-password.schema";
// Types
import type { SetPasswordHookProps } from "./types/set-password.hook.types";
import type { SetPasswordSchema } from "../schemas/types/set-password.schema.types";

const SetPasswordHook = ({ onOpenChange, onSuccess }: SetPasswordHookProps) => {
  const t = useTranslations("accountsSettings.components.setPassword");

  const setPasswordSchema = getSetPasswordSchema(t);

  const form = useForm<SetPasswordSchema>({
    resolver: zodResolver(setPasswordSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const { data: sessionData, isPending: isPendingSession } =
    authClient.useSession();

  const { handleDialogOpenChange, handleSubmit } = SetPasswordHandlers({
    form,
    onOpenChange,
    onSuccess,
    t,
  });

  return {
    form,
    handleDialogOpenChange,
    handleSubmit,
    isPendingSession,
    sessionData,
    t,
  };
};

export { SetPasswordHook };
