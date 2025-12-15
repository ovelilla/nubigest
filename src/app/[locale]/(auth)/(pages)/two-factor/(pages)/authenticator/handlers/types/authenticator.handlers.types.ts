// Types
import type { Dispatch, SetStateAction } from "react";
import type { TotpSchema } from "../../schemas/types/authenticator.schema.types";
import type { UseFormReturn } from "react-hook-form";
import type { _Translator } from "next-intl";
import type { useRouter } from "@/i18n/navigation";

type TwoFactorHandlersProps = {
  form: UseFormReturn<TotpSchema>;
  router: ReturnType<typeof useRouter>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  t: _Translator;
};

type TwoFactorHandlersReturn = {
  handleSubmit: (values: TotpSchema) => void;
};

type SubmitHandler = (props: {
  form: UseFormReturn<TotpSchema>;
  router: ReturnType<typeof useRouter>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  t: _Translator;
  values: TotpSchema;
}) => Promise<void>;

export type { TwoFactorHandlersProps, TwoFactorHandlersReturn, SubmitHandler };
