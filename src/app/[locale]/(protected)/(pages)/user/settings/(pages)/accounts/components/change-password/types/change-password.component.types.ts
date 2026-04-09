type ChangePasswordProps = {
  onOpenChange: (open: boolean) => void;
  onSuccess: () => Promise<void>;
  open: boolean;
};

export type { ChangePasswordProps };
