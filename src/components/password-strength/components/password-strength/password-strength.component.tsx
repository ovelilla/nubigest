"use client";
// Contexts
import { PasswordStrengthProvider } from "../../context/password-strength.context";
// Types
import { PasswordStrengthProps } from "./types/password-strength.types";
// Libs
import { cn } from "@/lib/utils";

const PasswordStrength = ({
  value,
  children,
  className,
}: PasswordStrengthProps) => (
  <PasswordStrengthProvider value={value}>
    <div className={cn("flex flex-col gap-2", className)}>{children}</div>
  </PasswordStrengthProvider>
);

export { PasswordStrength };
