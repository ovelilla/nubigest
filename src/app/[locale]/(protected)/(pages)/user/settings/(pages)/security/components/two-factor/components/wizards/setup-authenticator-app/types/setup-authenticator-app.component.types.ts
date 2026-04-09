// Config
import { steps } from "../config/setup-authenticator-app.config";
// Types
import type { Stepper as StepperType } from "@stepperize/react";

type Steps = typeof steps;

type SetupAuthenticatorAppProps = {
  onOpenChange: (open: boolean) => void;
  open: boolean;
};

type SetupAuthenticatorAppStepper = StepperType<Steps>;

export type { Steps, SetupAuthenticatorAppProps, SetupAuthenticatorAppStepper };
