type ExtractSecretFromTotpUri = (props: {
  totpUri: string | null;
}) => string | null;

export type { ExtractSecretFromTotpUri };
