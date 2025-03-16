const SLOT_DURATIONS: Array<{ label: string; value: string }> = [
  { label: "30 minutos", value: "00:30:00" },
  { label: "20 minutos", value: "00:20:00" },
  { label: "15 minutos", value: "00:15:00" },
  { label: "10 minutos", value: "00:10:00" },
  { label: "5 minutos", value: "00:05:00" },
];

const VIEW_ITEMS: Array<{ label: string; value: string }> = [
  { label: "Mes", value: "dayGridMonth" },
  { label: "Semana", value: "timeGridWeek" },
  { label: "Día", value: "timeGridDay" },
  { label: "Lista semana", value: "listWeek" },
  { label: "Lista día", value: "listDay" },
];

export { SLOT_DURATIONS, VIEW_ITEMS };
