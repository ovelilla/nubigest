"use client";
// Vendors
import { useTranslations } from "next-intl";
// Components
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";

const SessionsEmpty = () => {
  const t = useTranslations("sessionsSettings.components.sessionsEmpty");
  return (
    <Item>
      <ItemContent>
        <ItemTitle>{t("title")}</ItemTitle>
        <ItemDescription>{t("description")}</ItemDescription>
      </ItemContent>
    </Item>
  );
};

export { SessionsEmpty };
