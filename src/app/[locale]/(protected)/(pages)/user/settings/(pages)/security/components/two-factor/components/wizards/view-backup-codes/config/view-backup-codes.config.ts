// Vendors
import { defineStepper } from "@stepperize/react";
// Constants
import { STEPS } from "../constants/view-backup-codes.constants";

const { Stepper, steps, useStepper } = defineStepper(...STEPS);

export { Stepper, steps, useStepper };
