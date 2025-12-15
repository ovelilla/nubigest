// Types
import type { Dispatch, SetStateAction } from "react";
import type { TwoFactorSchema } from "../../schemas/types/two-factor.schema.types";
import type { UseFormReturn } from "react-hook-form";
import type { _Translator } from "next-intl";
import type { useRouter } from "@/i18n/navigation";

type ResendHandler = (props: {
  setCooldown: Dispatch<SetStateAction<number>>;
  setLoadingEmail: Dispatch<SetStateAction<boolean>>;
  t: _Translator;
}) => Promise<void>;

type TwoFactorHandlersProps = {
  form: UseFormReturn<TwoFactorSchema>;
  router: ReturnType<typeof useRouter>;
  setCooldown: Dispatch<SetStateAction<number>>;
  setLoadingEmail: Dispatch<SetStateAction<boolean>>;
  setLoadingVerify: Dispatch<SetStateAction<boolean>>;
  t: _Translator;
};

type TwoFactorHandlersReturn = {
  handleResend: () => void;
  handleSubmit: (values: TwoFactorSchema) => void;
};

type SubmitHandler = (props: {
  form: UseFormReturn<TwoFactorSchema>;
  router: ReturnType<typeof useRouter>;
  setLoadingVerify: Dispatch<SetStateAction<boolean>>;
  t: _Translator;
  values: TwoFactorSchema;
}) => Promise<void>;

export type {
  ResendHandler,
  TwoFactorHandlersProps,
  TwoFactorHandlersReturn,
  SubmitHandler,
};
