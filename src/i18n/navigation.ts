// Vendors
import { createNavigation } from "next-intl/navigation";
// i18n
import { routing } from "./routing";

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
