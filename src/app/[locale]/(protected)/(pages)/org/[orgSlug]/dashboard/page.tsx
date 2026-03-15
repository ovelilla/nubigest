// Containers
import { DashboardContainer } from "./dashboard.container";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

const DashboardPage = async () => {
  return <DashboardContainer />;
};

export default DashboardPage;
