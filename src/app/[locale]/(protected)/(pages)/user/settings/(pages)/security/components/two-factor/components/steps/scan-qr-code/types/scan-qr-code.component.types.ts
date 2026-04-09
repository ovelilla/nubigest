type ScanQrCodeProps = {
  description?: string;
  onNext: () => void;
  title?: string;
  totpUri: string | null;
};

export type { ScanQrCodeProps };
