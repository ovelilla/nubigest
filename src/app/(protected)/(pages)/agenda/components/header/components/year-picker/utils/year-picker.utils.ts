// Types
import type { GetYearsReturn } from "./types/year-picker.utils.types";

const getYears = (currentYear: number | null): GetYearsReturn => {
  if (!currentYear) {
    return [];
  }

  return Array.from({ length: 7 }, (_, index) => {
    const year = currentYear - 3 + index;
    return { label: year, value: year };
  });
};

export { getYears };
