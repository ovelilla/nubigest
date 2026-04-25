// Vendors
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
// Auth
import { authClient } from "@/lib/auth-client";
// Constants
import { DEFAULT_VALUES } from "../constants/delete-account.constants";
// Handlers
import { DeleteAccountHandlers } from "../handlers/delete-account.handlers";
// Schemas
import { getDeleteAccountSchema } from "../schemas/delete-account.schema";
// Types
import type { DeleteAccountSchema } from "../schemas/types/delete-account.schema.types";

const useDeleteAccount = () => {
  const t = useTranslations("profileSettings.components.deleteAccount");

  const deleteAccountSchema = getDeleteAccountSchema(t);

  const form = useForm<DeleteAccountSchema>({
    resolver: zodResolver(deleteAccountSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const [hasPassword, setHasPassword] = useState(false);
  const [isAccountsPending, setIsAccountsPending] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isOAuthDialogOpen, setIsOAuthDialogOpen] = useState(false);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const { data } = await authClient.listAccounts();
        const accounts = data ?? [];
        setHasPassword(
          accounts.some((account) => account.providerId === "credential"),
        );
      } finally {
        setIsAccountsPending(false);
      }
    };

    void fetchAccounts();
  }, []);

  const {
    handleDeleteClick,
    handleDialogOpenChange,
    handleDialogOpenChangeComplete,
    handleOAuthDialogOpenChange,
    handleOAuthDialogSubmit,
    handleSubmit,
  } = DeleteAccountHandlers({
    form,
    hasPassword,
    setIsDeleting,
    setIsDialogOpen,
    setIsOAuthDialogOpen,
    t,
  });

  return {
    form,
    handleDeleteClick,
    handleDialogOpenChange,
    handleDialogOpenChangeComplete,
    handleOAuthDialogOpenChange,
    handleOAuthDialogSubmit,
    handleSubmit,
    hasPassword,
    isAccountsPending,
    isDeleting,
    isDialogOpen,
    isOAuthDialogOpen,
    t,
  };
};

export { useDeleteAccount };
