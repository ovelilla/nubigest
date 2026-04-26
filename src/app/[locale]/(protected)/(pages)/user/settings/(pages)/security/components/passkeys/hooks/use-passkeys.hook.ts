// Vendors
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
// Api
import { listUserPasskeys } from "../api/list-user-passkeys/list-user-passkeys.api";
// Constants
import { DEFAULT_VALUES } from "../constants/passkeys.constants";
// Handlers
import { PasskeysHandlers } from "../handlers/passkeys.handlers";
// Libs
import { authClient } from "@/lib/auth-client";
// Schemas
import { getPasskeySchema } from "../schemas/passkey.schema";
// Types
import type { Passkey } from "@better-auth/passkey";
import type { PasskeySchema } from "../schemas/types/passkey.schema.types";

const usePasskeys = () => {
  const [deletingPasskeyId, setDeletingPasskeyId] = useState<string | null>(
    null,
  );
  const [editingPasskey, setEditingPasskey] = useState<Passkey | null>(null);
  const [isAddingPasskey, setIsAddingPasskey] = useState(false);

  const t = useTranslations("securitySettings.components.passkeys");

  const queryClient = useQueryClient();

  const { data: sessionData, isPending: isPendingSession } =
    authClient.useSession();

  const hasSession = !!sessionData?.user;
  const userId = sessionData?.user.id;

  const passkeySchema = getPasskeySchema(t);

  const form = useForm<PasskeySchema>({
    resolver: zodResolver(passkeySchema),
    defaultValues: DEFAULT_VALUES,
  });

  const { data: passkeys = [], isLoading: isLoadingPasskeys } = useQuery({
    queryKey: ["passkeys", userId],
    enabled: hasSession,
    queryFn: listUserPasskeys,
  });

  console.log("passkeys", passkeys);

  const hasPasskeys = passkeys.length > 0;

  const {
    handleAddPasskey,
    handleCancelRenamePasskey,
    handleDeletePasskey,
    handleStartRenamePasskey,
    handleSubmit,
  } = PasskeysHandlers({
    editingPasskey,
    form,
    queryClient,
    setDeletingPasskeyId,
    setEditingPasskey,
    setIsAddingPasskey,
    t,
    userId,
  });

  return {
    deletingPasskeyId,
    editingPasskey,
    form,
    handleAddPasskey,
    handleCancelRenamePasskey,
    handleDeletePasskey,
    handleStartRenamePasskey,
    handleSubmit,
    hasPasskeys,
    isAddingPasskey,
    isLoadingPasskeys,
    isPendingSession,
    passkeys,
    t,
  };
};

export { usePasskeys };
