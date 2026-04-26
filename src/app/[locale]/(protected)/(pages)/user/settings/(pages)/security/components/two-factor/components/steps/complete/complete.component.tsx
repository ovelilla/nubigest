// Components
import {
  Step,
  StepContent,
  StepDescription,
  StepDoneButton,
  StepFooter,
  StepHeader,
  StepTitle,
} from "@/components/step/step.component";
// Hooks
import { useComplete } from "./hooks/use-complete.hook";
// Types
import type { CompleteProps } from "./types/complete.component.types";

const Complete = ({ children, description, onDone, title }: CompleteProps) => {
  const { t } = useComplete();
  return (
    <Step>
      {(description || title) && (
        <StepHeader>
          {title && <StepTitle>{title}</StepTitle>}
          {description && <StepDescription>{description}</StepDescription>}
        </StepHeader>
      )}
      <StepContent>
        {children}
        <StepFooter>
          <StepDoneButton onClick={onDone}>
            {t("ui.doneButton.label")}
          </StepDoneButton>
        </StepFooter>
      </StepContent>
    </Step>
  );
};

export { Complete };
