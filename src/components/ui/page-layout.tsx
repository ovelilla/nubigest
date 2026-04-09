import { cn } from "@/lib/utils";
// Types
import type { HTMLAttributes } from "react";

const PageLayout = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("flex w-full flex-col gap-6 p-6", className)}
      {...props}
    />
  );
};

const PageLayoutHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("flex flex-col gap-4", className)} {...props} />;
};

const PageLayoutHeaderTitle = ({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h1
      className={cn("text-2xl leading-none font-semibold", className)}
      {...props}
    />
  );
};

const PageLayoutHeaderDescription = ({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className={cn("text-muted-foreground text-sm", className)} {...props} />
  );
};

const PageLayoutContent = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn("flex flex-col gap-6 xl:flex-row xl:gap-12", className)}
      {...props}
    />
  );
};

export {
  PageLayout,
  PageLayoutHeader,
  PageLayoutHeaderTitle,
  PageLayoutHeaderDescription,
  PageLayoutContent,
};
