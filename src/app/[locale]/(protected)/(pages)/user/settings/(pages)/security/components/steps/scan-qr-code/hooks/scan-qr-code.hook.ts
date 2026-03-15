// Vendors
import { useTranslations } from "next-intl";
// Types
import type { ScanQrCodeHookProps } from "./types/scan-qr-code.hook.types.ts";
// Utils
import { extractSecretFromTotpUri } from "../utils/extract-secret/extract-secret.util";
import { formatSecret } from "../utils/format-sectet/format-secret.util";

const ScanQrCodeHook = ({ totpUri }: ScanQrCodeHookProps) => {
  const t = useTranslations("securitySettings.components.steps.scanQrCode");

  const secret = extractSecretFromTotpUri({ totpUri });
  const formattedSecret = secret ? formatSecret({ secret }) : null;

  return {
    formattedSecret,
    secret,
    t,
  };
};

export { ScanQrCodeHook };
