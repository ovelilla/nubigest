// Vendors
import { toast } from "sonner";
// Actions
import { createOrganizationAction } from "../actions/create-organization.actions";
// Types
import type {
  CreateOrganizationHandlersProps,
  CreateOrganizationHandlersReturn,
  OpenChangeHandlerProps,
  SubmitHandlerProps,
} from "./types/create-organization.handlers.types";

const openChangeHandler = ({
  form,
  open,
  setOpenDialog,
}: OpenChangeHandlerProps) => {
  setOpenDialog(open);
  if (!open) {
    form.reset();
  }
};

const submitHandler = async ({
  form,
  setLoading,
  setOpenDialog,
  t,
  values,
}: SubmitHandlerProps): Promise<void> => {
  setLoading(true);

  try {
    const result = await createOrganizationAction({ values });

    if (result.status === "error") {
      toast.error(result.message);
      return;
    }

    if (result.status === "success") {
      toast.success(result.message);
      form.reset();
      setOpenDialog(false);
      return;
    }
  } catch (error) {
    console.error("Error in submitHandler", error);
    toast.error(t("handlers.submit.error.generic"));
  } finally {
    setLoading(false);
  }
};

const CreateOrganizationHandlers = ({
  form,
  setLoading,
  setOpenDialog,
  t,
}: CreateOrganizationHandlersProps): CreateOrganizationHandlersReturn => {
  return {
    handleOpenChange: (open) =>
      openChangeHandler({ form, open, setOpenDialog }),
    handleSubmit: (values) =>
      submitHandler({
        form,
        setLoading,
        setOpenDialog,
        t,
        values,
      }),
  };
};

export { CreateOrganizationHandlers };
