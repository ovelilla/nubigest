// Config
import { steps } from "../config/enable-two-factor.config";
// Types
import type { Stepper as StepperType } from "@stepperize/react";

type Steps = typeof steps;

type EnableTwoFactorProps = {
  onOpenChange: (open: boolean) => void;
  open: boolean;
};

type EnableTwoFactorStepper = StepperType<Steps>;

export type { Steps, EnableTwoFactorProps, EnableTwoFactorStepper };
