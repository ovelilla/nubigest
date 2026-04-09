// Icons
import { KeyRound } from "lucide-react";
import { SiGithub, SiGoogle } from "@icons-pack/react-simple-icons";
// Types
import type { IconType } from "@icons-pack/react-simple-icons";
import type { LucideIcon } from "lucide-react";

const ACCOUNT_ICONS: Record<string, LucideIcon | IconType> = {
  github: SiGithub,
  google: SiGoogle,
  credential: KeyRound,
};

export { ACCOUNT_ICONS };
