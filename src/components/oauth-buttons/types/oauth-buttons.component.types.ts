import { type LucideIcon } from "lucide-react";

type OAuthButtonsProps = {
  loading: {
    provider: string;
    status: boolean;
  };
  onClick: (provider: string) => void;
  providers: {
    icon: LucideIcon;
    label: string;
    provider: string;
  }[];
};

export type { OAuthButtonsProps };
