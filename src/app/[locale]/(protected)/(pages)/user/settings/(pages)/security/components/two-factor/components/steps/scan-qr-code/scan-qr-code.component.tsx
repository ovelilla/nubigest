// Vendors
import QRCode from "react-qr-code";
// Components
import { ButtonCopy } from "@/components/ui/button-copy.component";
import { SeparatorWithText } from "@/components/ui/separator-with-text";
import {
  Step,
  StepContent,
  StepDescription,
  StepNextButton,
  StepFooter,
  StepHeader,
  StepTitle,
} from "@/components/step/step.component";
// Hooks
import { useScanQrCode } from "./hooks/use-scan-qr-code.hook";
// Types
import type { ScanQrCodeProps } from "./types/scan-qr-code.component.types";

const ScanQrCode = ({
  description,
  onNext,
  title,
  totpUri,
}: ScanQrCodeProps) => {
  const { formattedSecret, secret, t } = useScanQrCode({ totpUri });

  return (
    <Step>
      {(description || title) && (
        <StepHeader>
          {title && <StepTitle>{title}</StepTitle>}
          {description && <StepDescription>{description}</StepDescription>}
        </StepHeader>
      )}
      <StepContent>
        <div className="justify-self-center rounded-md border bg-white p-4">
          <QRCode
            value={totpUri ?? ""}
            size={256}
            style={{ width: "100%", height: "auto" }}
            viewBox="0 0 256 256"
          />
        </div>
        <SeparatorWithText>{t("ui.separator")}</SeparatorWithText>
        <div className="flex gap-2 overflow-hidden">
          <div className="scrollbar-hidden overflow-x-auto rounded-md border p-2 font-mono text-sm tracking-wider whitespace-nowrap">
            {formattedSecret}
          </div>
          <ButtonCopy value={secret ?? ""} variant="outline" size="icon" />
        </div>
        <StepFooter>
          <StepNextButton onClick={onNext}>
            {t("ui.nextButton.label")}
          </StepNextButton>
        </StepFooter>
      </StepContent>
    </Step>
  );
};

export { ScanQrCode };
