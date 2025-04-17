// Components
import {
  Sidebar as SidebarComponent,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Header } from "./components/header/header.component";
import { Content } from "./components/content/content.component";
// Types
import type { SidebarProps } from "./types/sidebar.component.types";

const Sidebar = ({ organizations, session }: SidebarProps) => {
  return (
    <SidebarComponent collapsible="icon">
      <Header organizations={organizations} session={session} />
      <Content session={session} />
      <SidebarRail />
    </SidebarComponent>
  );
};

export { Sidebar };
