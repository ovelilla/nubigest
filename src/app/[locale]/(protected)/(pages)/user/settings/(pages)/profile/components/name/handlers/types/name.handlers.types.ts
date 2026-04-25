// Auth
import { authClient } from "@/lib/auth-client";
// Vendors
import type { _Translator } from "next-intl";
import type { NameSchema } from "../../schemas/types/name.schema.types";
import type { UseFormReturn } from "react-hook-form";

type NameHandlersProps = {
  form: UseFormReturn<NameSchema>;
  refetch: ReturnType<typeof authClient.useSession>["refetch"];
  t: _Translator;
};

type NameHandlersReturn = {
  handleSubmit: (values: NameSchema) => void;
};

type HandleSubmit = (props: {
  form: UseFormReturn<NameSchema>;
  refetch: ReturnType<typeof authClient.useSession>["refetch"];
  t: _Translator;
  values: NameSchema;
}) => Promise<void>;

export type { HandleSubmit, NameHandlersProps, NameHandlersReturn };
