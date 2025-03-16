"use client";
// Components
import { Content } from "./components/content/content.component";
import { Dialog } from "./components/dialog/dialog.component";
import { Header } from "./components/header/header.component";
import { Sidebar } from "./components/sidebar/sidebar.component";
// Hooks
import { AppointmentsHook } from "./hooks/appointments.hook";

const AppointmentsContainer = () => {
  const {
    appointmentForm,
    calendarRef,
    datesState,
    openDialog,
    openSearchBar,
    openSidebar,
    setDatesState,
    setOpenDialog,
    setOpenSearchBar,
    setOpenSidebar,
    setShowWeekends,
    setSlotDuration,
    showWeekends,
    slotDuration,
  } = AppointmentsHook();

  return (
    <div className="relative flex flex-1 overflow-hidden">
      <Sidebar {...{ calendarRef, openSidebar, setOpenSidebar }} />

      <div className="flex flex-1 flex-col">
        <Header
          {...{
            calendarRef,
            openSearchBar,
            setOpenSearchBar,
            setOpenSidebar,
            setShowWeekends,
            setSlotDuration,
            showWeekends,
            slotDuration,
          }}
        />

        <div className="flex-1">
          <Content
            {...{
              calendarRef,
              appointmentForm,
              setDatesState,
              setOpenDialog,
              showWeekends,
              slotDuration,
            }}
          />
        </div>

        <Dialog
          {...{
            form: appointmentForm,
            open: openDialog,
            setOpen: setOpenDialog,
          }}
        />
      </div>
    </div>
  );
};

export { AppointmentsContainer };
