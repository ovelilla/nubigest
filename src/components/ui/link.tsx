import { Link as NextIntlLink } from "@/i18n/navigation";
// Libs
import { cn } from "@/lib/utils";

type AppLinkProps = React.ComponentProps<typeof NextIntlLink> & {
  disabled?: boolean;
};

const Link = ({
  disabled = false,
  onClick,
  className,
  ...props
}: AppLinkProps) => {
  return (
    <NextIntlLink
      {...props}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : props.tabIndex}
      onClick={(e) => {
        if (disabled) {
          e.preventDefault();
          return;
        }
        onClick?.(e);
      }}
      className={cn(
        disabled && "text-muted-foreground pointer-events-none",
        className,
      )}
    />
  );
};

export { Link };
