// Components
import { Button } from "@/components/ui/button";
// Icons
import { Eye, EyeOff } from "lucide-react";
// Libs
import { cn } from "@/lib/utils";
// Types
import type { ButtonProps } from "@/components/ui/button";

type ButtonTogglePasswordProps = ButtonProps & {
  showPassword: boolean;
};

const ButtonTogglePassword = ({
  showPassword,
  className,
  ...props
}: ButtonTogglePasswordProps) => {
  return (
    <Button
      type="button"
      size="icon"
      variant="ghost"
      className={cn("absolute top-1/2 right-0 -translate-y-1/2", className)}
      {...props}
    >
      {showPassword ? (
        <EyeOff className="h-5 w-5" />
      ) : (
        <Eye className="h-5 w-5" />
      )}
    </Button>
  );
};

export { ButtonTogglePassword };
