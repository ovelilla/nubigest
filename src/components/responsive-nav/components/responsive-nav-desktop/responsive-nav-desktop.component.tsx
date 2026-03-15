"use client";
// Components
import { Button } from "@/components/ui/button";
// i18n
import { Link } from "@/i18n/navigation";
// Types
import type { ResponsiveNavDesktopProps } from "./types/responsive-nav-desktop.component.types";

const ResponsiveNavDesktop = ({
  items,
  activeItem,
}: ResponsiveNavDesktopProps) => (
  <nav className="hidden gap-2 lg:flex">
    {items.map(({ id, label, href }) => (
      <Button
        key={id}
        nativeButton={false}
        render={
          <Link href={href} prefetch={false}>
            {label}
          </Link>
        }
        variant={activeItem.id === id ? "secondary" : "ghost"}
      />
    ))}
  </nav>
);

export { ResponsiveNavDesktop };
