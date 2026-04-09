type BackupCodesProps = {
  acknowledged?: boolean;
  backupCodes: string[];
  description?: string;
  isLoading?: boolean;
  onAcknowledgedChange?: (checked: boolean) => void;
  onDone?: () => void;
  onNext?: () => void;
  title?: string;
};

export type { BackupCodesProps };
