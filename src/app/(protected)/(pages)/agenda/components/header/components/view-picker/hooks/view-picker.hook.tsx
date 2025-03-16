// Handlers
import { ViewPickerHandlers } from "../handlers/view-picker.handlers";
// Types
import type {
  ViewPickerHookProps,
  ViewPickerHookReturn,
} from "./types/view-picker.hook.types";

const ViewPickerHook = ({
  calendarRef,
}: ViewPickerHookProps): ViewPickerHookReturn => {
  const calendarApi = calendarRef.current?.getApi() ?? null;
  const viewType = calendarApi?.view?.type ?? null;

  const { handleViewChange } = ViewPickerHandlers({
    calendarRef,
  });

  return {
    handleViewChange,
    viewType,
  };
};

export { ViewPickerHook };
