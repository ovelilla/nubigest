// Types
import type {
  ContentClickHandlerProps,
  DateSelectHandlerProps,
  SidebarHandlersProps,
  SidebarHandlersReturn,
  OverlayClickHandlerProps,
} from "./types/sidebar.handlers.types";

const contentClickHandler = ({ event }: ContentClickHandlerProps): void => {
  event.stopPropagation();
};

const dateSelectHandler = ({
  calendarRef,
  date,
}: DateSelectHandlerProps): void => {
  if (date) {
    calendarRef.current?.getApi().gotoDate(date);
  }
};

const overlayClickHandler = ({
  setOpenSidebar,
}: OverlayClickHandlerProps): void => {
  setOpenSidebar(false);
};

const SidebarHandlers = ({
  calendarRef,
  setOpenSidebar,
}: SidebarHandlersProps): SidebarHandlersReturn => {
  return {
    handleContentClick: (event) => contentClickHandler({ event }),
    handleDateSelect: (date) => dateSelectHandler({ calendarRef, date }),
    handleOverlayClick: () => overlayClickHandler({ setOpenSidebar }),
  };
};

export { SidebarHandlers };
