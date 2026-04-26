// Vendors
import { getTranslations } from "next-intl/server";
// Containers
import { HomeContainer } from "./home.container";
// Types
import type { Metadata } from "next";
import type { HomePageProps } from "./types/page.types";

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.metadata" });
  return {
    title: t("title"),
    description: t("description"),
    robots: {
      index: false,
      follow: false,
    },
  };
}

const HomePage = () => {
  return <HomeContainer />;
};

export default HomePage;
