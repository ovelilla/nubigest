// Vendors
import { useForm } from "react-hook-form";
import { useRouter } from "@/i18n/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
// Constants
import { DEFAULT_VALUES } from "../constants/backup.constants";
// Handlers
import { BackupHandlers } from "../handlers/backup.handlers";
// Schemas
import { getBackupSchema } from "../schemas/backup.schema";
// Types
import type { BackupSchema } from "../schemas/types/backup.schema.types";

const BackupHook = () => {
  const [loading, setLoading] = useState(false);

  const tBackup = useTranslations("backup");
  const tTwoFactor = useTranslations("twoFactor");

  const BackupSchema = getBackupSchema(tBackup);

  const form = useForm<BackupSchema>({
    resolver: zodResolver(BackupSchema),
    defaultValues: DEFAULT_VALUES,
  });

  const router = useRouter();

  const { handleSubmit } = BackupHandlers({
    form,
    router,
    setLoading,
    tBackup,
    tTwoFactor,
  });

  return {
    form,
    handleSubmit,
    loading,
    t: tBackup,
  };
};

export { BackupHook };
