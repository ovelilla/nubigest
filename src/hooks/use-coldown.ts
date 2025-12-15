// Vendors
import { useCallback, useEffect, useState } from "react";

const useCooldown = () => {
  const [cooldown, setCooldown] = useState(0);

  const start = useCallback((seconds: number) => {
    setCooldown(seconds);
  }, []);

  const reset = useCallback(() => {
    setCooldown(0);
  }, []);

  useEffect(() => {
    if (cooldown <= 0) return;

    const id = setInterval(() => {
      setCooldown((c) => c - 1);
    }, 1000);

    return () => clearInterval(id);
  }, [cooldown]);

  return {
    cooldown,
    start,
    reset,
    isActive: cooldown > 0,
  };
};

export { useCooldown };
