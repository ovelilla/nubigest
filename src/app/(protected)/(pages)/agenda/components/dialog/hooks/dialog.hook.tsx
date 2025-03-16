// Vendors
import { useState } from "react";
// Handlers
import { DialogHandlers } from "../handlers/dialog.handlers";
// Types
import type {
  DialogHookProps,
  DialogHookReturn,
} from "./types/dialog.hook.types";

const DialogHook = ({ form }: DialogHookProps): DialogHookReturn => {
  const [loading, setLoading] = useState<boolean>(false);

  const { handleEndDateSelect, handleStartDateSelect, handleSubmit } =
    DialogHandlers({
      form,
      setLoading,
    });

  return {
    handleEndDateSelect,
    handleStartDateSelect,
    handleSubmit,
    loading,
  };
};

export { DialogHook };
