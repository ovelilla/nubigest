// Icons
import { Smartphone, Tablet, Tv, Gamepad2 } from "lucide-react";
// Types
import type { LucideIcon } from "lucide-react";

const DEVICE_ICONS: Record<string, LucideIcon> = {
  mobile: Smartphone,
  tablet: Tablet,
  console: Gamepad2,
  smarttv: Tv,
};

export { DEVICE_ICONS };
