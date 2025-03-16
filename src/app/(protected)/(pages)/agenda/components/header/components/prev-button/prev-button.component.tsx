// Types
import type { PrevButtonProps } from "./types/prev-button.component.types";
// Components
import { Button } from "@/components/ui/button";
// Hooks
import { PrevButtonHook } from "./hooks/prev-button.hook";
// Icons
import { ChevronLeft } from "lucide-react";

const PrevButton = ({ calendarRef }: PrevButtonProps) => {
  const { handlePrevButtonClick } = PrevButtonHook({
    calendarRef,
  });

  return (
    <Button
      aria-label="Anterior"
      onClick={handlePrevButtonClick}
      size="icon"
      variant="ghost"
    >
      <ChevronLeft />
    </Button>
  );
};

export { PrevButton };
