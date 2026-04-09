type SetPasswordProps = {
  onOpenChange: (open: boolean) => void;
  onSuccess: () => Promise<void>;
  open: boolean;
};

export type { SetPasswordProps };
