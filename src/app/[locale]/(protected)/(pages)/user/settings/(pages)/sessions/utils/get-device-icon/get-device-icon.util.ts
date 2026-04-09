// Constants
import { DEVICE_ICONS } from "./constants/get-device-icon.util.constants";
// Icons
import { Laptop } from "lucide-react";
// Types
import type { GetDeviceIcon } from "./types/get-device-icon.util.types";

const getDeviceIcon: GetDeviceIcon = ({ deviceType }) =>
  DEVICE_ICONS[deviceType ?? ""] ?? Laptop;

export { getDeviceIcon };
