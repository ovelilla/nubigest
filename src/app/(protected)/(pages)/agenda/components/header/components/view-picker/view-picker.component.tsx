// Components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// Constants
import { VIEW_ITEMS } from "./contants/view-picker.constants";
// Hooks
import { ViewPickerHook } from "./hooks/view-picker.hook";
// Icons
import { ChevronDown } from "lucide-react";
// Types
import type { ViewPickerProps } from "./types/view-picker.component.types";

const ViewPicker = ({ calendarRef }: ViewPickerProps) => {
  const { handleViewChange, viewType } = ViewPickerHook({
    calendarRef,
  });

  if (!viewType) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="hidden lg:inline-flex" variant="ghost">
          {VIEW_ITEMS.find(({ value }) => value === viewType)?.label}
          <ChevronDown />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup
          value={viewType}
          onValueChange={(value) => handleViewChange(value)}
        >
          {VIEW_ITEMS.map(({ label, value }) => (
            <DropdownMenuRadioItem key={value} value={value}>
              {label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { ViewPicker };
