"use client";
// Vendors
import { useState } from "react";
import { useTranslations } from "next-intl";
// Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// Libs
import { cn } from "@/lib/utils";
// Icons
import { Eye, EyeOff } from "lucide-react";

function PasswordInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  const [showPassword, setShowPassword] = useState(false);

  const t = useTranslations("components.passwordInput");

  return (
    <div className="relative">
      <Input
        {...props}
        type={showPassword ? "text" : "password"}
        className={cn("pr-12", className)}
      />
      <Button
        aria-label={showPassword ? t("ariaLabelHide") : t("ariaLabelShow")}
        aria-pressed={showPassword}
        className="absolute top-1/2 right-0 -translate-y-1/2"
        disabled={props.disabled}
        onClick={() => setShowPassword((v) => !v)}
        size="icon"
        variant="ghost"
      >
        {showPassword ? (
          <EyeOff className="h-5 w-5" />
        ) : (
          <Eye className="h-5 w-5" />
        )}
      </Button>
    </div>
  );
}

export { PasswordInput };
