// Layouts
import { PublicLayout as PublicLayoutWrapper } from "./layouts/public/public.layout";
// Types
import type { PublicLayoutProps } from "./types/layout.types";

const PublicLayout = async ({ children }: PublicLayoutProps) => {
  return <PublicLayoutWrapper>{children}</PublicLayoutWrapper>;
};

export default PublicLayout;
