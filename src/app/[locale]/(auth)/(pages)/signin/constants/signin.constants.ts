// Icons
import { SiGithub, SiGoogle } from "@icons-pack/react-simple-icons";

const DEFAULT_VALUES = {
  email: "",
  password: "",
  rememberMe: false,
} as const;

const OAUTH_PROVIDERS = [
  {
    icon: SiGithub,
    provider: "github",
  },
  {
    icon: SiGoogle,
    provider: "google",
  },
] as const;

export { DEFAULT_VALUES, OAUTH_PROVIDERS };
