import type { UseFormReturn } from "react-hook-form";
import type { Passkey } from "@better-auth/passkey";
import type { PasskeySchema } from "../../../schemas/types/passkey.schema.types";

type PasskeyItemProps = {
  deletingPasskeyId: string | null;
  editingPasskey: Passkey | null;
  form: UseFormReturn<PasskeySchema>;
  onCancelRename: () => void;
  onDelete: (id: string) => void;
  onStartRename: (passkey: Passkey) => void;
  onSubmit: (values: PasskeySchema) => void | Promise<void>;
  passkey: Passkey;
  t: (key: string) => string;
};

export type { PasskeyItemProps };
