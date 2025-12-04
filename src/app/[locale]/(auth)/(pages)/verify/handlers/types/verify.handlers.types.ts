// Types
import type { Dispatch, SetStateAction } from "react";
import type { _Translator } from "next-intl";

type ResendHandler = (props: {
  email: string | null;
  setCooldown: Dispatch<SetStateAction<number>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  tAuth: _Translator;
  tVerify: _Translator;
}) => Promise<void>;

type VerifyHandlersProps = {
  email: string | null;
  setCooldown: Dispatch<SetStateAction<number>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  tAuth: _Translator;
  tVerify: _Translator;
};

type VerifyHandlersReturn = {
  handleResend: () => void;
};

export type { ResendHandler, VerifyHandlersProps, VerifyHandlersReturn };
