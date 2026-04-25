// Auth
import { authClient } from "@/lib/auth-client";
// Vendors
import type { _Translator } from "next-intl";
import type { UseFormReturn } from "react-hook-form";
// Types
import type { UsernameSchema } from "../../schemas/types/username.schema.types";

type UsernameHandlersProps = {
  form: UseFormReturn<UsernameSchema>;
  refetch: ReturnType<typeof authClient.useSession>["refetch"];
  sessionData: ReturnType<typeof authClient.useSession>["data"];
  t: _Translator;
};

type UsernameHandlersReturn = {
  handleSubmit: (values: UsernameSchema) => void;
};

type HandleSubmit = (props: {
  form: UseFormReturn<UsernameSchema>;
  refetch: ReturnType<typeof authClient.useSession>["refetch"];
  sessionData: ReturnType<typeof authClient.useSession>["data"];
  t: _Translator;
  values: UsernameSchema;
}) => Promise<void>;

export type { HandleSubmit, UsernameHandlersProps, UsernameHandlersReturn };
