// Components
import {
  Sidebar as SidebarComponent,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Header } from "./components/header/header.component";
import { Content } from "./components/content/content.component";

const Sidebar = () => {
  return (
    <SidebarComponent collapsible="icon">
      <Header />
      <Content />
      <SidebarRail />
    </SidebarComponent>
  );
};

export { Sidebar };
