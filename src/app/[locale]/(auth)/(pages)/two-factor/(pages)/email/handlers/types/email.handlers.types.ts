// Types
import type { Dispatch, SetStateAction } from "react";
import type { OtpSchema } from "../../schemas/types/email.schema.types";
import type { UseFormReturn } from "react-hook-form";
import type { _Translator } from "next-intl";
import type { useRouter } from "@/i18n/navigation";

type ResendHandler = (props: {
  setLoadingEmail: Dispatch<SetStateAction<boolean>>;
  startCooldown: (seconds: number) => void;
  t: _Translator;
}) => Promise<void>;

type EmailHandlersProps = {
  form: UseFormReturn<OtpSchema>;
  router: ReturnType<typeof useRouter>;
  setLoadingEmail: Dispatch<SetStateAction<boolean>>;
  setLoadingVerify: Dispatch<SetStateAction<boolean>>;
  startCooldown: (seconds: number) => void;
  t: _Translator;
};

type EmailHandlersReturn = {
  handleResend: () => void;
  handleSubmit: (values: OtpSchema) => void;
};

type SubmitHandler = (props: {
  form: UseFormReturn<OtpSchema>;
  router: ReturnType<typeof useRouter>;
  setLoadingVerify: Dispatch<SetStateAction<boolean>>;
  t: _Translator;
  values: OtpSchema;
}) => Promise<void>;

export type {
  ResendHandler,
  EmailHandlersProps,
  EmailHandlersReturn,
  SubmitHandler,
};
