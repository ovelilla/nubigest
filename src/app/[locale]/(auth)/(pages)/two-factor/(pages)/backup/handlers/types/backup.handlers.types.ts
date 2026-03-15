// Types
import type { Dispatch, SetStateAction } from "react";
import type { BackupSchema } from "../../schemas/types/backup.schema.types";
import type { UseFormReturn } from "react-hook-form";
import type { _Translator } from "next-intl";
import type { useRouter } from "@/i18n/navigation";

type BackupHandlersProps = {
  form: UseFormReturn<BackupSchema>;
  router: ReturnType<typeof useRouter>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  tBackup: _Translator;
  tTwoFactor: _Translator;
};

type BackupHandlersReturn = {
  handleSubmit: (values: BackupSchema) => void;
};

type SubmitHandler = (props: {
  form: UseFormReturn<BackupSchema>;
  router: ReturnType<typeof useRouter>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  tBackup: _Translator;
  tTwoFactor: _Translator;
  values: BackupSchema;
}) => Promise<void>;

export type { BackupHandlersProps, BackupHandlersReturn, SubmitHandler };
