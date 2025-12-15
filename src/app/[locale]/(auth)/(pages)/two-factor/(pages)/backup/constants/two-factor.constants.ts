// Icons
import { SiGoogle } from "@icons-pack/react-simple-icons";

const BACKUP_CODE_DEFAULT_VALUES = {
  code: "",
  trustDevice: false,
} as const;

const OAUTH_PROVIDERS = [
  {
    icon: SiGoogle,
    provider: "google",
  },
] as const;

const OTP_DEFAULT_VALUES = {
  code: "",
  trustDevice: false,
} as const;

const TOTP_DEFAULT_VALUES = {
  code: "",
  trustDevice: false,
} as const;

export {
  BACKUP_CODE_DEFAULT_VALUES,
  OAUTH_PROVIDERS,
  OTP_DEFAULT_VALUES,
  TOTP_DEFAULT_VALUES,
};
