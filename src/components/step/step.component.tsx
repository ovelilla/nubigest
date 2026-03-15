import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Step = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={cn("flex flex-col gap-6", className)} {...props} />;
};

const StepCancelButton = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Button>) => {
  return (
    <Button variant="ghost" className={cn("", className)} {...props}>
      {children}
    </Button>
  );
};

const StepContent = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={cn("grid gap-6", className)} {...props} />;
};

const StepDescription = ({
  className,
  ...props
}: React.ComponentProps<"p">) => {
  return (
    <p className={cn("text-muted-foreground text-sm", className)} {...props} />
  );
};

const StepDoneButton = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Button>) => {
  return (
    <Button className={cn("", className)} {...props}>
      {children}
    </Button>
  );
};

const StepFooter = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn("flex items-center justify-end gap-2", className)}
      {...props}
    />
  );
};

const StepHeader = ({ className, ...props }: React.ComponentProps<"div">) => {
  return <div className={cn("flex flex-col gap-2", className)} {...props} />;
};

const StepNextButton = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Button>) => {
  return (
    <Button className={cn("", className)} {...props}>
      {children}
    </Button>
  );
};

const StepPrevButton = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof Button>) => {
  return (
    <Button variant="secondary" className={cn("", className)} {...props}>
      {children}
    </Button>
  );
};

const StepTitle = ({ className, ...props }: React.ComponentProps<"h2">) => {
  return <h2 className={cn("text-lg font-medium", className)} {...props} />;
};

export {
  Step,
  StepCancelButton,
  StepContent,
  StepDescription,
  StepDoneButton,
  StepFooter,
  StepHeader,
  StepNextButton,
  StepPrevButton,
  StepTitle,
};
