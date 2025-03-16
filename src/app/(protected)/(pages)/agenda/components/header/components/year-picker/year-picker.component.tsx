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
import { YearPickerHook } from "./hooks/year-picker.hook";
// Icons
import { ChevronDown } from "lucide-react";
// Types
import type { YearPickerProps } from "./types/year-picker.component.types";

const YearPicker = ({ calendarRef }: YearPickerProps) => {
  const { currentYear, handleYearChange, years } = YearPickerHook({
    calendarRef,
  });

  if (currentYear === null) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="hidden lg:inline-flex" variant="ghost">
          {currentYear}
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup
          value={String(currentYear)}
          onValueChange={(value) => handleYearChange(Number(value))}
        >
          {years.map(({ label, value }) => (
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

export { YearPicker };
