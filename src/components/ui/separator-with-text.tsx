"use client";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface SeparatorWithTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

function SeparatorWithText({
  className,
  children,
  ...props
}: SeparatorWithTextProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <Separator className="flex-1" />
      <span className="text-muted-foreground text-sm" {...props}>
        {children}
      </span>
      <Separator className="flex-1" />
    </div>
  );
}

export { SeparatorWithText };
