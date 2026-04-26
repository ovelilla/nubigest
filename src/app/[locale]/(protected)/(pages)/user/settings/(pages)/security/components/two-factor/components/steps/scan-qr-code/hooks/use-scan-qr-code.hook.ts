// Vendors
import { useTranslations } from "next-intl";
// Types
import type { UseScanQrCodeProps } from "./types/scan-qr-code.hook.types.ts";
// Utils
import { extractSecretFromTotpUri } from "../utils/extract-secret/extract-secret.util";
import { formatSecret } from "../utils/format-sectet/format-secret.util";

const useScanQrCode = ({ totpUri }: UseScanQrCodeProps) => {
  const t = useTranslations(
    "securitySettings.components.twoFactor.components.steps.scanQrCode",
  );

  const secret = extractSecretFromTotpUri({ totpUri });
  const formattedSecret = secret ? formatSecret({ secret }) : null;

  return {
    formattedSecret,
    secret,
    t,
  };
};

export { useScanQrCode };
