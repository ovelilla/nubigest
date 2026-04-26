// Types
import type { DefaultTheme } from "@wrksz/themes/client";
import type { Dispatch, SetStateAction } from "react";

type HandleSetThemeProps = ThemeSwitcherHandlersProps & {
  value: DefaultTheme;
};
type ThemeSwitcherHandlersProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  setTheme: (theme: DefaultTheme) => void;
};

type ThemeSwitcherHandlersReturn = {
  handleSetTheme: (value: DefaultTheme) => void;
};

export type {
  ThemeSwitcherHandlersProps,
  HandleSetThemeProps,
  ThemeSwitcherHandlersReturn,
};
