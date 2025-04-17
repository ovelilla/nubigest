"use client";
// Vendors
import { type ComponentProps } from "react";
import { Link } from "@/i18n/navigation";
// Components
import { Button } from "./button";
// Types
import { ButtonProps } from "./button";
// Libs
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  buttonProps?: Omit<ButtonProps, "asChild" | "children" | "className">;
  linkProps: Omit<ComponentProps<typeof Link>, "children">;
  className?: string;
  children: React.ReactNode;
};

const ButtonLink = ({
  buttonProps,
  linkProps,
  className,
  children,
}: ButtonLinkProps) => {
  return (
    <Button
      asChild
      variant="link"
      className={cn("px-0 font-normal", className)}
      {...buttonProps}
    >
      <Link {...linkProps}>{children}</Link>
    </Button>
  );
};

export { ButtonLink };
