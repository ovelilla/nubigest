// Constants
import { ACCOUNT_ICONS } from "./constants/get-account-icon.util.constants";
// Types
import type { GetAccountIcon } from "./types/get-account-icon.util.types";

const getAccountIcon: GetAccountIcon = ({ providerId }) =>
  ACCOUNT_ICONS[providerId ?? ""];

export { getAccountIcon };
