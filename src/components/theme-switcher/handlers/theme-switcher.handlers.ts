// Types
import type {
  HandleSetThemeProps,
  ThemeSwitcherHandlersProps,
  ThemeSwitcherHandlersReturn,
} from "./types/theme-switcher.handlers.types";

const handleSetTheme = ({ value, setTheme, setOpen }: HandleSetThemeProps) => {
  setTheme(value);
  setOpen(false);
};

const ThemeSwitcherHandlers = ({
  setOpen,
  setTheme,
}: ThemeSwitcherHandlersProps): ThemeSwitcherHandlersReturn => ({
  handleSetTheme: (value) => handleSetTheme({ value, setTheme, setOpen }),
});

export { ThemeSwitcherHandlers };
