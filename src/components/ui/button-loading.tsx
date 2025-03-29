"use client";
// Components
import { Button } from "./button";
// Icons
import { LoaderCircle } from "lucide-react";
// Types
import { ButtonProps } from "./button";

type ButtonLoadingProps = ButtonProps & {
  hideOnLoading?: boolean;
  loading?: boolean;
};

const ButtonLoading: React.FC<ButtonLoadingProps> = ({
  children,
  className,
  disabled,
  hideOnLoading = false,
  loading = false,
  ...props
}) => {
  return (
    <Button disabled={loading || disabled} className={className} {...props}>
      {loading && <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />}
      {!loading || !hideOnLoading ? children : null}
    </Button>
  );
};

export { ButtonLoading };
