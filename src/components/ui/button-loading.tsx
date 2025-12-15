"use client";
import { Button } from "./button";
import { LoaderCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const ButtonLoading = ({
  children,
  className,
  disabled,
  loading = false,
  ...props
}: React.ComponentProps<typeof Button> & {
  loading?: boolean;
}) => {
  return (
    <Button
      {...props}
      className={cn("gap-2", className)}
      disabled={disabled || loading}
      focusableWhenDisabled
    >
      {loading && <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden />}
      {children}
    </Button>
  );
};

export { ButtonLoading };
