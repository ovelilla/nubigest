"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Check, Download } from "lucide-react";

import { Button } from "./button";
import { cn } from "@/lib/utils";

type ButtonDownloadProps = React.ComponentProps<typeof Button> & {
  filename?: string;
  mimeType?: string;
  onError?: (error?: unknown) => void;
  onSuccess?: () => void;
  timeoutMs?: number;
  value: string | null;
};

const ButtonDownload = ({
  children,
  className,
  filename = "download.txt",
  mimeType = "text/plain;charset=utf-8",
  onError,
  onSuccess,
  timeoutMs = 1500,
  value,
  ...props
}: ButtonDownloadProps) => {
  const [downloaded, setDownloaded] = useState(false);
  const [working, setWorking] = useState(false);

  const t = useTranslations("root.components.buttonDownload");

  useEffect(() => {
    if (!downloaded) {
      return;
    }

    const id = setTimeout(() => setDownloaded(false), timeoutMs);

    return () => clearTimeout(id);
  }, [downloaded, timeoutMs]);

  const handleDownload = async () => {
    if (!value) {
      return;
    }

    setWorking(true);

    try {
      const blob = new Blob([value], { type: mimeType });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      setDownloaded(true);
      onSuccess?.();
    } catch (error) {
      console.error("Download failed", error);
      setDownloaded(false);
      onError?.(error);
    } finally {
      setWorking(false);
    }
  };

  return (
    <Button
      {...props}
      onClick={handleDownload}
      disabled={!value || props.disabled || working}
      className={cn(className)}
      aria-busy={working}
      aria-label={
        downloaded ? t("ariaLabel.downloaded") : t("ariaLabel.download")
      }
    >
      {downloaded ? <Check /> : <Download />}
      {children}
    </Button>
  );
};

export { ButtonDownload };
