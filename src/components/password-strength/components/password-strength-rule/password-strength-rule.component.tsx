"use client";
// Vendors
import { useEffect } from "react";
// Constants
import { RULES_DEFINITIONS } from "../../constants/password-strength.constants";
// Contexts
import { usePasswordStrengthContext } from "../../context/password-strength.context";
// Icons
import { Check, X } from "lucide-react";
// Libs
import { cn } from "@/lib/utils";
// Types
import { PasswordStrengthRuleProps } from "./types/password-strength-rule.types";

const PasswordStrengthRule = ({
  rule,
  children,
  className,
}: PasswordStrengthRuleProps) => {
  const { registerRule, value } = usePasswordStrengthContext();

  const definition = RULES_DEFINITIONS.find((r) => r.key === rule);
  const valid = definition?.test(value) ?? false;

  useEffect(() => {
    if (definition) {
      registerRule(definition);
    }
  }, [definition, registerRule]);

  return (
    <li className={cn("flex items-center gap-2 text-sm", className)}>
      {valid ? <Check className="size-4" /> : <X className="size-4" />}
      <span className={valid ? "text-foreground" : ""}>{children}</span>
    </li>
  );
};

export { PasswordStrengthRule };
