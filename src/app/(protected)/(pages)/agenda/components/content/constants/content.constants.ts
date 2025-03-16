const constants = {
  FULLCALENDAR_PROPS: {
    allDayClassNames: "text-sm",
    businessHours: {
      daysOfWeek: [1, 2, 3, 4, 5],
      startTime: "08:00",
      endTime: "20:00",
    },
    dayHeaderClassNames: "uppercase",
    dayHeaders: true,
    editable: true,
    firstDay: 1,
    headerToolbar: false,
    height: "100%",
    initialView: "dayGridMonth",
    navLinkDayClick: "timeGridDay",
    navLinks: true,
    nowIndicator: true,
    selectable: true,
    slotLabelInterval: "00:30:00",
    unselectAuto: true,
  },
} as const;

export default constants;
