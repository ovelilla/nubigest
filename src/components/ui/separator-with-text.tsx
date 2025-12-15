"use client";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

function SeparatorWithText({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { children: React.ReactNode }) {
  return (
    <div className={cn("flex items-center gap-4", className)} {...props}>
      <Separator className="flex-1" />
      <span className="text-muted-foreground text-sm">{children}</span>
      <Separator className="flex-1" />
    </div>
  );
}

export { SeparatorWithText };
