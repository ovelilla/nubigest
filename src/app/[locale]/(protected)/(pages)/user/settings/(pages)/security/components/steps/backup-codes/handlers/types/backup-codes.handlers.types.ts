type BackupCodesHandlersProps = {
  onAcknowledgedChange?: (checked: boolean) => void;
};

type BackupCodesHandlersReturn = {
  handleCheckedChange: (checked: boolean) => void;
  handleCopySuccess: () => Promise<void>;
  handleDownloadSuccess: () => void;
};

type HandleCheckedChange = (props: {
  checked: boolean;
  onAcknowledgedChange?: (checked: boolean) => void;
}) => void;

type HandleCopySuccess = (props: {
  onAcknowledgedChange?: (checked: boolean) => void;
}) => Promise<void>;

type HandleDownloadSuccess = (props: {
  onAcknowledgedChange?: (checked: boolean) => void;
}) => void;

export type {
  BackupCodesHandlersProps,
  BackupCodesHandlersReturn,
  HandleCheckedChange,
  HandleCopySuccess,
  HandleDownloadSuccess,
};
