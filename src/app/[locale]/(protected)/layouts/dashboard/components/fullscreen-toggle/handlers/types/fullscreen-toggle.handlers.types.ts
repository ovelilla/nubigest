// Types
import type { Dispatch, SetStateAction } from "react";

type FullscreenToggleHandlersProps = {
  setIsFullscreen: Dispatch<SetStateAction<boolean>>;
};

type FullscreenChangeHandlerProps = Pick<
  FullscreenToggleHandlersProps,
  "setIsFullscreen"
>;

export type { FullscreenToggleHandlersProps, FullscreenChangeHandlerProps };
