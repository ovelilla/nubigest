// Vendors
import { useTranslations } from "next-intl";
// Components
import {
  PageLayout,
  PageLayoutHeader,
  PageLayoutHeaderTitle,
  PageLayoutHeaderDescription,
  PageLayoutContent,
} from "@/components/ui/page-layout";
import { SettingsNav } from "../../components/settings-nav/settings-nav.component";
// Types
import type { AccountSettingsPageProps } from "./types/page.types";

const AccountSettingsPage = ({ children }: AccountSettingsPageProps) => {
  const t = useTranslations("accountSettings.page");
  return (
    <PageLayout>
      <PageLayoutHeader>
        <PageLayoutHeaderTitle>{t("header.title")}</PageLayoutHeaderTitle>
        <PageLayoutHeaderDescription>
          {t("header.description")}
        </PageLayoutHeaderDescription>
      </PageLayoutHeader>
      <PageLayoutContent>
        <SettingsNav />
        {children}
      </PageLayoutContent>
    </PageLayout>
  );
};

export default AccountSettingsPage;
