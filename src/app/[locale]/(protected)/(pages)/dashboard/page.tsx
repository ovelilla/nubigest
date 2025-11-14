// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

const DashboardPage = async () => {
  return <div className="p-4">Dashboard Page</div>;
};

export default DashboardPage;
