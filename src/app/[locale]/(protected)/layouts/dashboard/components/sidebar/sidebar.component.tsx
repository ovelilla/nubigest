// Components
import {
  Sidebar as SidebarComponent,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Header } from "./components/header/header.component";
import { Content } from "./components/content/content.component";
// Constants
import { ITEMS } from "./constants/sidebar.constants";
// Types
import type { SidebarProps } from "./types/sidebar.component.types";

const Sidebar = ({ open, session }: SidebarProps) => {
  return (
    <SidebarComponent collapsible="icon">
      <Header open={open} session={session} />
      <Content items={ITEMS.navMain} />
      <SidebarRail />
    </SidebarComponent>
  );
};

export { Sidebar };
