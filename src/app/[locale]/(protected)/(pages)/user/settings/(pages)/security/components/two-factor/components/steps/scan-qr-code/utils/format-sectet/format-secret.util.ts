// Types
import type { FormatSecret } from "./types/format-secret.util.types";

const formatSecret: FormatSecret = ({ secret }) => {
  return secret.match(/.{1,4}/g)?.join(" ") ?? secret;
};

export { formatSecret };
