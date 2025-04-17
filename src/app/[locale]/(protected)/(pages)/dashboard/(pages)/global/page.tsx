// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global",
  description: "Global page",
};

const GlobalPage = () => {
  return <div className="p-4">GlobalPage</div>;
};

export default GlobalPage;
