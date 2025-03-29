// Vendors
import { useEffect, useState } from "react";

type UseIsMountedReturn = {
  isMounted: boolean;
};

const useIsMounted = (): UseIsMountedReturn => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  return {
    isMounted,
  };
};

export { useIsMounted };
