// Handlers
import { ContentHandlers } from "../handlers/content.handlers";
// Types
import type {
  ContentHookProps,
  ContentHookReturn,
} from "./types/content.hook.types";

const ContentHook = ({
  appointmentForm,
  setDatesState,
  setOpenDialog,
}: ContentHookProps): ContentHookReturn => {
  const { handleDatesSet, handleDateSelect } = ContentHandlers({
    appointmentForm,
    setDatesState,
    setOpenDialog,
  });

  return {
    handleDatesSet,
    handleDateSelect,
  };
};

export { ContentHook };
