// Config
import { steps } from "../config/view-backup-codes.config";
// Types
import type { Stepper as StepperType } from "@stepperize/react";

type Steps = typeof steps;

type ViewBackupCodesProps = {
  onOpenChange: (open: boolean) => void;
  open: boolean;
};

type ViewBackupCodesStepper = StepperType<Steps>;

export type { Steps, ViewBackupCodesProps, ViewBackupCodesStepper };
