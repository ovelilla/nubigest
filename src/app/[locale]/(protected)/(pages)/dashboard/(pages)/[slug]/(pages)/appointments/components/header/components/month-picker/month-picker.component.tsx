// Components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// Hooks
import { MonthPickerHook } from "./hooks/month-picker.hook";
// Icons
import { ChevronDown } from "lucide-react";
// Types
import type { MonthPickerProps } from "./types/month-picker.component.types";

const MonthPicker = ({ calendarRef }: MonthPickerProps) => {
  const { currentMonth, handleMonthChange, months } = MonthPickerHook({
    calendarRef,
  });

  if (currentMonth === null) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="hidden capitalize lg:inline-flex" variant="ghost">
          {months[currentMonth]?.label}
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup
          value={String(months[currentMonth]?.value)}
          onValueChange={(value) => handleMonthChange(Number(value))}
        >
          {months.map(({ label, value }) => (
            <DropdownMenuRadioItem
              key={value}
              value={String(value)}
              className="capitalize"
            >
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { MonthPicker };
