// Vendors
import { createContext, use, useState } from "react";
// Types
import type {
  PasswordStrengthContextValue,
  PasswordStrengthProviderProps,
} from "./types/password-strength.context.types";
import { Rule } from "../types/password-strength.types";

const PasswordStrengthContext =
  createContext<PasswordStrengthContextValue | null>(null);

const usePasswordStrengthContext = () => {
  const context = use(PasswordStrengthContext);
  if (!context) {
    throw new Error("Must be used within <PasswordStrength>");
  }
  return context;
};

const PasswordStrengthProvider = ({
  value,
  children,
}: PasswordStrengthProviderProps) => {
  const [rules, setRules] = useState<Rule[]>([]);

  const registerRule = (rule: Rule) => {
    setRules((prev) =>
      prev.some((r) => r.key === rule.key) ? prev : [...prev, rule],
    );
  };

  return (
    <PasswordStrengthContext value={{ value, registerRule, rules }}>
      {children}
    </PasswordStrengthContext>
  );
};

export { PasswordStrengthProvider, usePasswordStrengthContext };
