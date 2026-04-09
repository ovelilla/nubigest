"use client";
// Vendors
import { useTranslations } from "next-intl";
// Components
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "@/components/ui/item";

const SessionsError = () => {
  const t = useTranslations("sessionsSettings.components.sessionsError");
  return (
    <ItemGroup>
      <Item>
        <ItemContent>
          <ItemTitle>{t("title")}</ItemTitle>
          <ItemDescription>{t("description")}</ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  );
};

export { SessionsError };
