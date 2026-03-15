// Vendors
import { defineStepper } from "@stepperize/react";
// Constants
import { STEPS } from "../constants/setup-authenticator-app.constants";

const { Stepper, steps, useStepper } = defineStepper(...STEPS);

export { Stepper, steps, useStepper };
