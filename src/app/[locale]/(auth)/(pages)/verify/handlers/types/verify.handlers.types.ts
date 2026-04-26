// Types
import type { Dispatch, SetStateAction } from "react";
import type { _Translator } from "next-intl";

type HandleResend = (props: {
  email: string;
  startCooldown: (seconds: number) => void;
  setLoading: Dispatch<SetStateAction<boolean>>;
  tErrors: _Translator;
  tVerify: _Translator;
}) => Promise<void>;

type VerifyHandlersProps = {
  email: string;
  startCooldown: (seconds: number) => void;
  setLoading: Dispatch<SetStateAction<boolean>>;
  tErrors: _Translator;
  tVerify: _Translator;
};

type VerifyHandlersReturn = {
  handleResend: () => void;
};

export type { HandleResend, VerifyHandlersProps, VerifyHandlersReturn };
