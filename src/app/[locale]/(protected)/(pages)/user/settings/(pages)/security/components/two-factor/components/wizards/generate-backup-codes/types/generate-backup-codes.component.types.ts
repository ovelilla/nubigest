// Config
import { steps } from "../config/generate-backup-codes.config";
// Types
import type { Stepper as StepperType } from "@stepperize/react";

type Steps = typeof steps;

type GenerateBackupCodesProps = {
  onOpenChange: (open: boolean) => void;
  open: boolean;
};

type GenerateBackupCodesStepper = StepperType<Steps>;

export type { Steps, GenerateBackupCodesProps, GenerateBackupCodesStepper };
