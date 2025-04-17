"use client";

// Vendors
import dayGridPlugin from "@fullcalendar/daygrid";
import esLocale from "@fullcalendar/core/locales/es";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
// Components
import { DayCellContent } from "./components/day-cell-content/day-cell-content.component";
// Constants
import constants from "./constants/content.constants";
// Hooks
import { ContentHook } from "./hooks/content.hook";
// Types
import type { ContentProps } from "./types/content.component.types";

const events = [
  {
    title: "All day event",
    start: "2025-03-01",
    end: "2025-03-02",
  },
  {
    title: "Long event",
    start: "2025-03-07",
    end: "2025-03-10",
  },
  {
    groupId: "999",
    title: "Repeating event",
    start: "2025-03-09T16:00:00",
  },
  {
    groupId: "999",
    title: "Repeating event",
    start: "2025-03-16T16:00:00",
  },
  {
    title: "Conference",
    start: "2025-03-11",
    end: "2025-03-13",
  },
  {
    title: "Meeting",
    start: "2025-03-12T10:30:00",
    end: "2025-03-12T12:30:00",
  },
  {
    title: "Lunch",
    start: "2025-03-12T12:00:00",
  },
  {
    title: "Meeting",
    start: "2025-03-12T14:30:00",
  },
  {
    title: "Happy Hour",
    start: "2025-03-12T17:30:00",
  },
  {
    title: "Dinner",
    start: "2025-03-12T20:00:00",
  },
  {
    title: "Birthday Party",
    start: "2025-03-13T07:00:00",
  },
  {
    title: "Click for Google",
    url: "http://google.com/",
    start: "2025-03-28",
  },
];

const Content = ({
  appointmentForm,
  calendarRef,
  setDatesState,
  setOpenDialog,
  showWeekends,
  slotDuration,
}: ContentProps) => {
  const { handleDatesSet, handleDateSelect } = ContentHook({
    appointmentForm,
    setDatesState,
    setOpenDialog,
  });

  return (
    <FullCalendar
      {...{
        ...constants.FULLCALENDAR_PROPS,
        datesSet: handleDatesSet,
        dayCellContent: DayCellContent,
        events: events,
        locale: esLocale,
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
        ref: calendarRef,
        select: handleDateSelect,
        slotDuration: slotDuration,
        weekends: showWeekends,
      }}
    />
  );
};

export { Content };
