// Types
import type { ExtractSecretFromTotpUri } from "./types/extract-secret.util.types";

const extractSecretFromTotpUri: ExtractSecretFromTotpUri = ({ totpUri }) => {
  if (!totpUri) return null;

  try {
    const url = new URL(totpUri);
    return url.searchParams.get("secret");
  } catch {
    return null;
  }
};

export { extractSecretFromTotpUri };
