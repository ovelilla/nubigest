"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Check, Copy } from "lucide-react";

import { Button } from "./button";
import { cn } from "@/lib/utils";

type ButtonCopyProps = React.ComponentProps<typeof Button> & {
  onError?: (error?: unknown) => void;
  onSuccess?: () => void;
  timeoutMs?: number;
  value: string | null;
};

const ButtonCopy = ({
  children,
  className,
  onError,
  onSuccess,
  timeoutMs = 1500,
  value,
  ...props
}: ButtonCopyProps) => {
  const [copied, setCopied] = useState(false);

  const t = useTranslations("root.components.buttonCopy");

  useEffect(() => {
    if (!copied) {
      return;
    }

    const id = setTimeout(() => setCopied(false), timeoutMs);

    return () => clearTimeout(id);
  }, [copied, timeoutMs]);

  const handleCopy = async () => {
    if (!value) {
      return;
    }

    setCopied(true);

    try {
      await navigator.clipboard.writeText(value);
      onSuccess?.();
    } catch (error) {
      console.error("Copy failed", error);
      setCopied(false);
      onError?.(error);
    }
  };

  return (
    <Button
      {...props}
      onClick={handleCopy}
      disabled={!value || props.disabled}
      className={cn(className)}
      aria-label={copied ? t("ariaLabel.copied") : t("ariaLabel.copy")}
    >
      {copied ? <Check /> : <Copy />}
      {children}
    </Button>
  );
};

export { ButtonCopy };
