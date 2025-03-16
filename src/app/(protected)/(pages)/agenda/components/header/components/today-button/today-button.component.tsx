// Components
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
// Hooks
import { TodayButtonHook } from "./hooks/today-button.hook";
// Icons
import { CalendarCheck } from "lucide-react";
// Types
import type { TodayButtonProps } from "./types/today-button.component.types";

const TodayButton = ({ calendarRef }: TodayButtonProps) => {
  const { handleTodayButtonClick } = TodayButtonHook({
    calendarRef,
  });

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          onClick={handleTodayButtonClick}
          aria-label="Hoy"
        >
          <CalendarCheck />
        </Button>
      </TooltipTrigger>
      <TooltipContent>Hoy</TooltipContent>
    </Tooltip>
  );
};

export { TodayButton };
