"use client";
// Components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// i18n
import { Link } from "@/i18n/navigation";
// Icons
import { ChevronDown } from "lucide-react";
// Types
import type { ResponsiveNavMobileProps } from "./types/responsive-nav-mobile.component.types";

const ResponsiveNavMobile = ({
  items,
  activeItem,
}: ResponsiveNavMobileProps) => (
  <DropdownMenu>
    <DropdownMenuTrigger
      className="lg:hidden"
      render={
        <Button className="w-full justify-between" variant="outline">
          {activeItem.label}
          <ChevronDown />
        </Button>
      }
    />
    <DropdownMenuContent>
      <DropdownMenuGroup>
        {items.map(({ id, label, href }) => (
          <DropdownMenuItem
            key={id}
            render={
              <Link href={href} prefetch={false}>
                {label}
              </Link>
            }
          />
        ))}
      </DropdownMenuGroup>
    </DropdownMenuContent>
  </DropdownMenu>
);

export { ResponsiveNavMobile };
