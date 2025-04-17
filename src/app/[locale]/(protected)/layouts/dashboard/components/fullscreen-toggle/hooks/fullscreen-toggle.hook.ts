// Vendors
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
// Handlers
import { FullscreenToggleHandlers } from "../handlers/fullscreen-toggle.handlers";

const FullscreenToggleHook = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const t = useTranslations(
    "protected.layouts.dashboard.components.fullscreenToggle",
  );

  const { handleFullscreenChange, handleToggleFullscreen } =
    FullscreenToggleHandlers({
      setIsFullscreen,
    });

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return {
    handleToggleFullscreen,
    isFullscreen,
    t,
  };
};

export { FullscreenToggleHook };
