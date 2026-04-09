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

const AccountsError = () => {
  const t = useTranslations("connectionsSettings.components.connectionsError");
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

export { AccountsError };
