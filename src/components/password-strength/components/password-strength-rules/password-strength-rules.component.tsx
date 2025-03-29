"use client";
// Libs
import { cn } from "@/lib/utils";
// Types
import { PasswordStrengthRulesProps } from "./types/password-strength-rules.types";

const PasswordStrengthRules = ({
  children,
  className,
}: PasswordStrengthRulesProps) => (
  <ul
    className={cn(
      "text-muted-foreground grid grid-cols-2 gap-1 text-sm sm:grid-cols-2",
      className,
    )}
  >
    {children}
  </ul>
);

export { PasswordStrengthRules };
