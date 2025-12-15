"use client";
// Components
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
// Config
import { getNavigation } from "./config/content.config";
// Hooks
import { ContentHook } from "./hooks/content.hook";
// i18n
import { Link } from "@/i18n/navigation";
// Icons
import { ChevronRight } from "lucide-react";

const Content = () => {
  const { pathname, t } = ContentHook();

  const navigation = getNavigation(t);

  return (
    <SidebarContent>
      {navigation.map((group) => (
        <SidebarGroup key={group.label}>
          <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
          <SidebarMenu>
            {group.items.map((item) => {
              const isActive = pathname === item.href.pathname;
              const isCollapsible = item.items && item.items.length > 0;

              return isCollapsible ? (
                <Collapsible
                  className="group/collapsible"
                  defaultOpen={isActive}
                  key={item.href.pathname}
                  render={
                    <SidebarMenuItem>
                      <CollapsibleTrigger
                        render={
                          <SidebarMenuButton
                            tooltip={item.title}
                            isActive={isActive}
                          >
                            {item.icon && <item.icon />}
                            <span>{item.title}</span>
                            <ChevronRight className="ml-auto group-data-[state=open]/collapsible:rotate-90" />
                          </SidebarMenuButton>
                        }
                      />
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.items?.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton
                                render={
                                  <Link href={subItem.href} prefetch={false}>
                                    <span>{subItem.title}</span>
                                  </Link>
                                }
                              />
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  }
                />
              ) : (
                <SidebarMenuItem key={item.href.pathname}>
                  <SidebarMenuButton
                    isActive={isActive}
                    render={
                      <Link href={item.href} prefetch={false}>
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                      </Link>
                    }
                  />
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      ))}
    </SidebarContent>
  );
};

export { Content };
