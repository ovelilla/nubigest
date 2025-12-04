// Types
import type { Dispatch, SetStateAction } from "react";
import type { _Translator } from "next-intl";

type SendTwoFactorOtp = (props: {
  setLoadingEmail: Dispatch<SetStateAction<boolean>>;
  t: _Translator;
}) => Promise<void>;

export type { SendTwoFactorOtp };
