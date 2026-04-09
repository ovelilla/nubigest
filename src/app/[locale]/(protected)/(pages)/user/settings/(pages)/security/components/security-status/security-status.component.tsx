"use client";
// Components
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item";
import { SecurityStatusSkeleton } from "./components/security-status-skeleton/security-status-skeleton.component";
// Hooks
import { useSecurityStatus } from "./hooks/use-security-status.hook";
// Icons
import { ShieldAlert, ShieldCheck } from "lucide-react";

const SecurityStatus = () => {
  const { isPendingSession, isTwoFactorEnabled, t } = useSecurityStatus();

  if (isPendingSession) {
    return <SecurityStatusSkeleton />;
  }

  return (
    <ItemGroup>
      <Item variant="outline">
        <ItemMedia variant="icon">
          {isTwoFactorEnabled ? (
            <ShieldCheck className="size-6" />
          ) : (
            <ShieldAlert className="size-6" />
          )}
        </ItemMedia>
        <ItemContent>
          <ItemTitle>
            {isTwoFactorEnabled
              ? t("ui.title.enabled")
              : t("ui.title.disabled")}
          </ItemTitle>
          <ItemDescription>
            {isTwoFactorEnabled
              ? t("ui.description.enabled")
              : t("ui.description.disabled")}
          </ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  );
};

export { SecurityStatus };
