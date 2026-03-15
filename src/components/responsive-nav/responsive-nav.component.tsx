"use client";
// Vendors
import React from "react";
// Components
import { ResponsiveNavDesktop } from "./components/responsive-nav-desktop/responsive-nav-desktop.component";
import { ResponsiveNavMobile } from "./components/responsive-nav-mobile/responsive-nav-mobile.component";
// Types
import type { ResponsiveNavProps } from "./types/responsive-nav.component.types";

const ResponsiveNav = ({ items, activeItem }: ResponsiveNavProps) => (
  <React.Fragment>
    <ResponsiveNavMobile items={items} activeItem={activeItem} />
    <ResponsiveNavDesktop items={items} activeItem={activeItem} />
  </React.Fragment>
);

export { ResponsiveNav };
