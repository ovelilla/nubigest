// Vendors
import { format, eachMonthOfInterval, startOfYear, endOfYear } from "date-fns";
import { es } from "date-fns/locale";
// Types
import type { GetMonthsReturn } from "./types/month-picker.utils.types";

const getMonths = (): GetMonthsReturn =>
  eachMonthOfInterval({
    start: startOfYear(new Date()),
    end: endOfYear(new Date()),
  }).map((date, index) => ({
    label: format(date, "MMMM", { locale: es }),
    value: index,
  }));

export { getMonths };
