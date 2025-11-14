// Vendors
import { useState } from "react";

const DashboardHook = () => {
  const [open, setOpen] = useState<boolean>(true);

  return {
    open,
    setOpen,
  };
};

export { DashboardHook };
