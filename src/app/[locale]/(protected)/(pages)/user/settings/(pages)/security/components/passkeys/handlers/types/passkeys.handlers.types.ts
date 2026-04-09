// Types
import type { _Translator } from "next-intl";
import type { Dispatch, SetStateAction } from "react";
import type { Passkey } from "@better-auth/passkey";
import type { PasskeySchema } from "../../schemas/types/passkey.schema.types";
import type { QueryClient } from "@tanstack/react-query";
import type { UseFormReturn } from "react-hook-form";

type HandleAddPasskey = (props: {
  queryClient: QueryClient;
  setIsAddingPasskey: Dispatch<SetStateAction<boolean>>;
  t: _Translator;
  userId: string | undefined;
}) => Promise<void>;

type HandleCancelRenamePasskey = (props: {
  form: UseFormReturn<PasskeySchema>;
  setEditingPasskey: Dispatch<SetStateAction<Passkey | null>>;
}) => void;

type HandleDeletePasskey = (props: {
  id: string;
  queryClient: QueryClient;
  setDeletingPasskeyId: Dispatch<SetStateAction<string | null>>;
  t: _Translator;
  userId: string | undefined;
}) => Promise<void>;

type HandleStartRenamePasskey = (props: {
  form: UseFormReturn<PasskeySchema>;
  passkey: Passkey;
  setEditingPasskey: Dispatch<SetStateAction<Passkey | null>>;
}) => void;

type HandleSubmit = (props: {
  editingPasskey: Passkey | null;
  form: UseFormReturn<PasskeySchema>;
  queryClient: QueryClient;
  setEditingPasskey: Dispatch<SetStateAction<Passkey | null>>;
  t: _Translator;
  userId: string | undefined;
  values: PasskeySchema;
}) => Promise<void>;

type PasskeysHandlersProps = {
  editingPasskey: Passkey | null;
  form: UseFormReturn<PasskeySchema>;
  queryClient: QueryClient;
  setDeletingPasskeyId: Dispatch<SetStateAction<string | null>>;
  setEditingPasskey: Dispatch<SetStateAction<Passkey | null>>;
  setIsAddingPasskey: Dispatch<SetStateAction<boolean>>;
  t: _Translator;
  userId: string | undefined;
};

type PasskeysHandlersReturn = {
  handleAddPasskey: () => Promise<void>;
  handleCancelRenamePasskey: () => void;
  handleDeletePasskey: (id: string) => Promise<void>;
  handleStartRenamePasskey: (passkey: Passkey) => void;
  handleSubmit: (values: PasskeySchema) => void;
};

export type {
  HandleAddPasskey,
  HandleCancelRenamePasskey,
  HandleDeletePasskey,
  HandleStartRenamePasskey,
  HandleSubmit,
  PasskeysHandlersProps,
  PasskeysHandlersReturn,
};
