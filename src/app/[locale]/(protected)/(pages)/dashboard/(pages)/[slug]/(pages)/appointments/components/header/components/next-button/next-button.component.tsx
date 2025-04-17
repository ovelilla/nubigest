// Types
import type { NextButtonProps } from "./types/next-button.component.types";
// Components
import { Button } from "@/components/ui/button";
// Hooks
import { NextButtonHook } from "./hooks/next-button.hook";
// Icons
import { ChevronRight } from "lucide-react";

const NextButton = ({ calendarRef }: NextButtonProps) => {
  const { handleNextButtonClick } = NextButtonHook({
    calendarRef,
  });

  return (
    <Button
      aria-label="Siguiente"
      onClick={handleNextButtonClick}
      size="icon"
      variant="ghost"
    >
      <ChevronRight />
    </Button>
  );
};

export { NextButton };
