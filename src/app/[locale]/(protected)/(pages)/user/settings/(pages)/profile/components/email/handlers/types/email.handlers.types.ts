// Auth
import { authClient } from "@/lib/auth-client";
// Vendors
import type { _Translator } from "next-intl";
import type { UseFormReturn } from "react-hook-form";
// Types
import type { EmailSchema } from "../../schemas/types/email.schema.types";

type EmailHandlersProps = {
  form: UseFormReturn<EmailSchema>;
  sessionData: ReturnType<typeof authClient.useSession>["data"];
  t: _Translator;
};

type EmailHandlersReturn = {
  handleSubmit: (values: EmailSchema) => void;
};

type HandleSubmit = (props: {
  form: UseFormReturn<EmailSchema>;
  sessionData: ReturnType<typeof authClient.useSession>["data"];
  t: _Translator;
  values: EmailSchema;
}) => Promise<void>;

export type { HandleSubmit, EmailHandlersProps, EmailHandlersReturn };
