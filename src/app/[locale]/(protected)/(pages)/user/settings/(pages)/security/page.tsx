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
// Containers
import { SecurityContainer } from "./security.container";

const SecurityPage = () => {
  const t = useTranslations("securitySettings.page");
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
        <SecurityContainer />
      </PageLayoutContent>
    </PageLayout>
  );
};

export default SecurityPage;
