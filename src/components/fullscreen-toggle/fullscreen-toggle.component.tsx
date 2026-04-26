// Components
import { Button } from "@/components/ui/button";
// Hooks
import { useFullscreenToggle } from "./hooks/use-fullscreen-toggle.hook";
// Icons
import { Expand, Shrink } from "lucide-react";

const FullscreenToggle = () => {
  const { handleToggleFullscreen, isFullscreen, t } = useFullscreenToggle();

  return (
    <Button
      aria-label={isFullscreen ? t("ariaLabel.exit") : t("ariaLabel.enter")}
      variant="ghost"
      size="icon"
      className="relative"
      onClick={handleToggleFullscreen}
    >
      {isFullscreen ? <Shrink /> : <Expand />}
    </Button>
  );
};

export { FullscreenToggle };
