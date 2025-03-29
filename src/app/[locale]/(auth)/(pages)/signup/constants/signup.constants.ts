// Icons
import { SiGoogle } from "@icons-pack/react-simple-icons";

const DEFAULT_VALUES = {
  name: "",
  email: "",
  password: "",
} as const;

const OAUTH_PROVIDERS = [
  {
    icon: SiGoogle,
    provider: "google",
  },
] as const;

export { DEFAULT_VALUES, OAUTH_PROVIDERS };
