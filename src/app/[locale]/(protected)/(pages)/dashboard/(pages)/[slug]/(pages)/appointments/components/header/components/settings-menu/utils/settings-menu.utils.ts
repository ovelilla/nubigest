// Vendors
import { format, eachMonthOfInterval, startOfYear, endOfYear } from "date-fns";
import { es } from "date-fns/locale";
// Types
import type {
  GetMonthsReturn,
  GetYearsReturn,
} from "./types/settings-menu.utils.types";

const getMonths = (): GetMonthsReturn =>
  eachMonthOfInterval({
    start: startOfYear(new Date()),
    end: endOfYear(new Date()),
  }).map((date, index) => ({
    label: format(date, "MMMM", { locale: es }),
    value: index,
  }));

const getYears = (currentYear: number | null): GetYearsReturn => {
  if (!currentYear) {
    return [];
  }

  return Array.from({ length: 7 }, (_, index) => {
    const year = currentYear - 3 + index;
    return { label: year, value: year };
  });
};

export { getMonths, getYears };
