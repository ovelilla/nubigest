"use client";
// Constants
import { STATES } from "../../constants/password-strength.constants";
// Contexts
import { usePasswordStrengthContext } from "../../context/password-strength.context";
// Libs
import { cn } from "@/lib/utils";
// Types
import { PasswordStrengthBarProps } from "./types/password-strength-bar.types";

const PasswordStrengthBar = ({ className }: PasswordStrengthBarProps) => {
  const { rules, value } = usePasswordStrengthContext();

  const total = rules.length;
  const matched = rules.filter((rule) => rule.test(value)).length;
  const state = STATES.find((state) => state.when(matched, total)) ?? STATES[0];

  return (
    <div className={cn("flex h-2 gap-0.5 overflow-hidden rounded", className)}>
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          className={cn("grow", i < matched ? state.color : "bg-muted")}
        />
      ))}
    </div>
  );
};

export { PasswordStrengthBar };
