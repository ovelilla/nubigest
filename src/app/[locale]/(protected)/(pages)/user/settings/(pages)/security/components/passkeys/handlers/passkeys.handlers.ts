// Vendors
import { toast } from "sonner";
// Auth
import { authClient } from "@/lib/auth-client";
// Types
import type {
  HandleAddPasskey,
  HandleCancelRenamePasskey,
  HandleDeletePasskey,
  HandleStartRenamePasskey,
  HandleSubmit,
  PasskeysHandlersProps,
  PasskeysHandlersReturn,
} from "./types/passkeys.handlers.types";
// Utils
import { getPasskeyName } from "../utils/get-passkey-name/get-passkey-name.util";

const handleAddPasskey: HandleAddPasskey = async ({
  queryClient,
  setIsAddingPasskey,
  t,
  userId,
}) => {
  setIsAddingPasskey(true);
  try {
    const name = getPasskeyName();

    const { error } = await authClient.passkey.addPasskey({
      name,
    });

    if (error) {
      toast.error(t("handlers.addPasskey.error"));
      return;
    }

    await queryClient.invalidateQueries({ queryKey: ["passkeys", userId] });
    toast.success(t("handlers.addPasskey.success"));
  } catch (error) {
    console.error("Error adding passkey:", error);
    toast.error(t("handlers.addPasskey.error"));
  } finally {
    setIsAddingPasskey(false);
  }
};

const handleCancelRenamePasskey: HandleCancelRenamePasskey = ({
  form,
  setEditingPasskey,
}) => {
  form.reset({ name: "" });
  setEditingPasskey(null);
};

const handleDeletePasskey: HandleDeletePasskey = async ({
  id,
  queryClient,
  setDeletingPasskeyId,
  t,
  userId,
}) => {
  setDeletingPasskeyId(id);

  try {
    const { error } = await authClient.passkey.deletePasskey({
      id,
    });

    if (error) {
      toast.error(t("handlers.deletePasskey.error"));
      return;
    }

    await queryClient.invalidateQueries({ queryKey: ["passkeys", userId] });
    toast.success(t("handlers.deletePasskey.success"));
  } catch (error) {
    console.error("Error deleting passkey:", error);
    toast.error(t("handlers.deletePasskey.error"));
  } finally {
    setDeletingPasskeyId(null);
  }
};

const handleStartRenamePasskey: HandleStartRenamePasskey = ({
  passkey,
  setEditingPasskey,
  form,
}) => {
  setEditingPasskey(passkey);
  form.reset({
    name: passkey.name ?? "",
  });
};

const handleSubmit: HandleSubmit = async ({
  editingPasskey,
  form,
  queryClient,
  setEditingPasskey,
  t,
  userId,
  values,
}) => {
  if (!editingPasskey) {
    return;
  }

  const name = values.name.trim();

  try {
    const { error } = await authClient.passkey.updatePasskey({
      id: editingPasskey.id,
      name,
    });

    if (error) {
      toast.error(t("handlers.renamePasskey.error"));
      return;
    }

    await queryClient.invalidateQueries({
      queryKey: ["passkeys", userId],
    });
    setEditingPasskey(null);
    toast.success(t("handlers.renamePasskey.success"));
    form.reset({ name: "" });
  } catch (error) {
    console.error("Error renaming passkey:", error);
    toast.error(t("handlers.renamePasskey.error"));
  }
};

const PasskeysHandlers = ({
  editingPasskey,
  form,
  queryClient,
  setDeletingPasskeyId,
  setEditingPasskey,
  setIsAddingPasskey,
  t,
  userId,
}: PasskeysHandlersProps): PasskeysHandlersReturn => {
  return {
    handleAddPasskey: () =>
      handleAddPasskey({
        queryClient,
        setIsAddingPasskey,
        t,
        userId,
      }),
    handleCancelRenamePasskey: () =>
      handleCancelRenamePasskey({
        form,
        setEditingPasskey,
      }),
    handleDeletePasskey: (id) =>
      handleDeletePasskey({
        id,
        queryClient,
        setDeletingPasskeyId,
        t,
        userId,
      }),
    handleStartRenamePasskey: (passkey) =>
      handleStartRenamePasskey({
        form,
        passkey,
        setEditingPasskey,
      }),
    handleSubmit: (values) =>
      handleSubmit({
        editingPasskey,
        form,
        queryClient,
        setEditingPasskey,
        t,
        userId,
        values,
      }),
  };
};

export { PasskeysHandlers };
