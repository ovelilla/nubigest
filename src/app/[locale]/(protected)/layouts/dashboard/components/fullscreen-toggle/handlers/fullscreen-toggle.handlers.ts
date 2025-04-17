// Types
import {
  FullscreenToggleHandlersProps,
  FullscreenChangeHandlerProps,
} from "./types/fullscreen-toggle.handlers.types";

const toggleFullscreenHandler = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
};
const fullscreenChangeHandler = ({
  setIsFullscreen,
}: FullscreenChangeHandlerProps) => {
  setIsFullscreen(Boolean(document.fullscreenElement));
};

const FullscreenToggleHandlers = ({
  setIsFullscreen,
}: FullscreenToggleHandlersProps) => ({
  handleToggleFullscreen: () => toggleFullscreenHandler(),
  handleFullscreenChange: () => fullscreenChangeHandler({ setIsFullscreen }),
});

export { FullscreenToggleHandlers };
