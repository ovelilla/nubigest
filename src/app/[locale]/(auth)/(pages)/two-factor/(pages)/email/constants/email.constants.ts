const DEFAULT_VALUES = {
  code: "",
  trustDevice: false,
} as const;

const OTP_COOLDOWN_MS = 60000 as const;

export { DEFAULT_VALUES, OTP_COOLDOWN_MS };
