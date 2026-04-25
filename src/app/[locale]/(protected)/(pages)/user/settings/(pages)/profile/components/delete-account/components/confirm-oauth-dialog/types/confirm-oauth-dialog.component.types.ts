type ConfirmOAuthDialogProps = {
  isDeleting: boolean;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: () => Promise<void>;
};

export type { ConfirmOAuthDialogProps };
