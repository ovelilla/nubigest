// Types
import type { ReactNode } from "react";
import type { Rule } from "../../types/password-strength.types";

type PasswordStrengthContextValue = {
  rules: Rule[];
  registerRule: (rule: Rule) => void;
  value: string;
};

type PasswordStrengthProviderProps = {
  children: ReactNode;
  value: string;
};

export type { PasswordStrengthContextValue, PasswordStrengthProviderProps };
