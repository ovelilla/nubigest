// Types
import type { Dispatch, SetStateAction } from "react";

type FullscreenToggleHandlersProps = {
  setIsFullscreen: Dispatch<SetStateAction<boolean>>;
};

type HandleFullscreenChangeProps = Pick<
  FullscreenToggleHandlersProps,
  "setIsFullscreen"
>;

export type { FullscreenToggleHandlersProps, HandleFullscreenChangeProps };
