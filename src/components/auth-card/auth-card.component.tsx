import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

function AuthCard({ className, ...props }: React.ComponentProps<typeof Card>) {
  return (
    <Card
      className={cn(
        "md:bg-card w-full max-w-120 rounded-none bg-transparent ring-0 md:rounded-xl md:ring-1",
        className,
      )}
      {...props}
    />
  );
}

function AuthCardHeader({
  className,
  ...props
}: React.ComponentProps<typeof CardHeader>) {
  return <CardHeader className={cn(className)} {...props} />;
}

function AuthCardTitle({
  className,
  ...props
}: React.ComponentProps<typeof CardTitle>) {
  return <CardTitle className={cn("text-xl", className)} {...props} />;
}

function AuthCardDescription({
  className,
  ...props
}: React.ComponentProps<typeof CardDescription>) {
  return <CardDescription className={cn(className)} {...props} />;
}

function AuthCardContent({
  className,
  ...props
}: React.ComponentProps<typeof CardContent>) {
  return (
    <CardContent className={cn("flex flex-col gap-6", className)} {...props} />
  );
}

function AuthCardFooter({
  className,
  ...props
}: React.ComponentProps<typeof CardFooter>) {
  return <CardFooter className={cn("justify-center", className)} {...props} />;
}

export {
  AuthCard,
  AuthCardContent,
  AuthCardDescription,
  AuthCardFooter,
  AuthCardHeader,
  AuthCardTitle,
};
