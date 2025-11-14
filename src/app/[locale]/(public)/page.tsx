// Vendors
import { getLocale } from "next-intl/server";
// i18n
import { redirect } from "@/i18n/navigation";

const Home = async () => {
  const locale = await getLocale();
  return redirect({ href: "/signin", locale });
};

export default Home;
