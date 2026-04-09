// i18n
import { redirect } from "@/i18n/navigation";
// Types
import type { SettingsPageProps } from "./types/page.types";

const SettingsPage = async ({ params }: SettingsPageProps) => {
  const { locale } = await params;

  redirect({ href: "/user/settings/profile", locale });
};

export default SettingsPage;
