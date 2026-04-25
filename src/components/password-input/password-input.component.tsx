"use client";
// Vendors
import { useState } from "react";
import { useTranslations } from "next-intl";
// Components
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
// Libs
import { cn } from "@/lib/utils";
// Icons
import { Eye, EyeOff } from "lucide-react";

type PasswordInputProps = React.ComponentProps<typeof InputGroupInput>;

function PasswordInput({ className, disabled, ...props }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const t = useTranslations("root.components.passwordInput");

  return (
    <InputGroup className={cn(className)}>
      <InputGroupInput
        {...props}
        disabled={disabled}
        type={showPassword ? "text" : "password"}
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          type="button"
          aria-label={showPassword ? t("ariaLabelHide") : t("ariaLabelShow")}
          aria-pressed={showPassword}
          disabled={disabled}
          onClick={() => setShowPassword((v) => !v)}
          size="icon-sm"
          variant="ghost"
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
}

export { PasswordInput };
