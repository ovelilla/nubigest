const STEPS = [
  { id: "password", confirmOnExit: false },
  { id: "backupCodes", confirmOnExit: true },
  { id: "complete", confirmOnExit: false },
] as const;

export { STEPS };
