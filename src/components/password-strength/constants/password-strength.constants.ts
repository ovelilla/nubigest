const RULES_DEFINITIONS = [
  { key: "length", test: (password: string) => password.length >= 6 },
  { key: "number", test: (password: string) => /\d/.test(password) },
  { key: "uppercase", test: (password: string) => /[A-Z]/.test(password) },
  { key: "special", test: (password: string) => /[^a-zA-Z0-9]/.test(password) },
  { key: "lowercase", test: (password: string) => /[a-z]/.test(password) },
];

const STATES = [
  { key: "none", color: "bg-muted", when: (m: number) => m === 0 },
  {
    key: "invalid",
    color: "bg-red-400",
    when: (m: number, t: number) => m === 0 && t > 0,
  },
  {
    key: "partial",
    color: "bg-yellow-400",
    when: (m: number, t: number) => m > 0 && m < t,
  },
  {
    key: "valid",
    color: "bg-green-400",
    when: (m: number, t: number) => m === t,
  },
];

export { RULES_DEFINITIONS, STATES };
