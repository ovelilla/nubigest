// Vendors
import { defineStepper } from "@stepperize/react";
// Constants
import { STEPS } from "../constants/enable-two-factor.constants";

const { Stepper, steps, useStepper } = defineStepper(...STEPS);

export { Stepper, steps, useStepper };
