// Config
import { steps } from "../config/disable-two-factor.config";
// Types
import type { Stepper as StepperType } from "@stepperize/react";

type Steps = typeof steps;

type DisableTwoFactorProps = {
  onOpenChange: (open: boolean) => void;
  open: boolean;
};

type DisableTwoFactorStepper = StepperType<Steps>;

export type { Steps, DisableTwoFactorProps, DisableTwoFactorStepper };
