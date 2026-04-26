// Types
import {
  FullscreenToggleHandlersProps,
  HandleFullscreenChangeProps,
} from "./types/fullscreen-toggle.handlers.types";

const handleToggleFullscreen = () => {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
};

const handleFullscreenChange = ({
  setIsFullscreen,
}: HandleFullscreenChangeProps) => {
  setIsFullscreen(Boolean(document.fullscreenElement));
};

const FullscreenToggleHandlers = ({
  setIsFullscreen,
}: FullscreenToggleHandlersProps) => ({
  handleToggleFullscreen: () => handleToggleFullscreen(),
  handleFullscreenChange: () => handleFullscreenChange({ setIsFullscreen }),
});

export { FullscreenToggleHandlers };
