const STEPS = [
  { id: "password", confirmOnExit: false },
  { id: "scanQrCode", confirmOnExit: true },
  { id: "verifyCode", confirmOnExit: true },
  { id: "complete", confirmOnExit: false },
] as const;

export { STEPS };
