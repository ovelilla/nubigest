// Components
import { Button } from "@/components/ui/button";
import { ButtonCopy } from "@/components/ui/button-copy.component";
import { ButtonDownload } from "@/components/ui/button-download.component";
import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Step,
  StepContent,
  StepDescription,
  StepDoneButton,
  StepFooter,
  StepHeader,
  StepNextButton,
  StepTitle,
} from "@/components/step/step.component";
// Hooks
import { useBackupCodes } from "./hooks/use-backup-codes.hook";
// Types
import type { BackupCodesProps } from "./types/backup-codes.component.types";

const BackupCodes = ({
  acknowledged,
  backupCodes,
  description,
  isLoading = false,
  onAcknowledgedChange,
  onDone,
  onNext,
  title,
}: BackupCodesProps) => {
  const {
    handleCheckedChange,
    handleCopySuccess,
    handleDownloadSuccess,
    showAcknowledgement,
    t,
  } = useBackupCodes({
    acknowledged,
    onAcknowledgedChange,
  });

  return (
    <Step>
      {(title || description) && (
        <StepHeader>
          {title && <StepTitle>{title}</StepTitle>}
          {description && <StepDescription>{description}</StepDescription>}
        </StepHeader>
      )}
      <StepContent>
        <div className="flex flex-col gap-4">
          <div className="rounded-xl border p-3">
            <ul className="grid grid-cols-2 justify-items-center gap-2">
              {isLoading
                ? Array.from({ length: 10 }).map((_, index) => (
                    <li key={index}>
                      <Skeleton className="h-5 w-24" />
                    </li>
                  ))
                : backupCodes.map((code) => (
                    <li key={code} className="font-mono text-sm">
                      {code}
                    </li>
                  ))}
            </ul>
          </div>
          <div className="flex gap-4">
            <ButtonCopy
              className="flex-1"
              disabled={isLoading}
              onSuccess={handleCopySuccess}
              value={backupCodes.join("\n")}
              variant="outline"
            >
              {t("ui.copyButton.label")}
            </ButtonCopy>
            <ButtonDownload
              className="flex-1"
              disabled={isLoading}
              filename="backup-codes.txt"
              onSuccess={handleDownloadSuccess}
              value={backupCodes.join("\n")}
              variant="outline"
            >
              {t("ui.downloadButton.label")}
            </ButtonDownload>
          </div>
          {showAcknowledgement && (
            <Field orientation="horizontal">
              <Checkbox
                id="acknowledge-backup-codes"
                checked={acknowledged}
                onCheckedChange={handleCheckedChange}
              />
              <Label htmlFor="acknowledge-backup-codes">
                {t("ui.confirmation.label")}
              </Label>
            </Field>
          )}
        </div>
        <StepFooter>
          {onDone && (
            <StepDoneButton disabled={isLoading} onClick={onDone}>
              {t("ui.doneButton.label")}
            </StepDoneButton>
          )}
          {onNext && (
            <StepNextButton
              disabled={isLoading || (showAcknowledgement && !acknowledged)}
              onClick={onNext}
            >
              {t("ui.nextButton.label")}
            </StepNextButton>
          )}
        </StepFooter>
      </StepContent>
    </Step>
  );
};

export { BackupCodes };
