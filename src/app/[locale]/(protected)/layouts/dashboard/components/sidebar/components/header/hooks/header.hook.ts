// Vendors
import { useState } from "react";

const HeaderHook = () => {
  const [openDialog, setOpenDialog] = useState(false);

  return {
    openDialog,
    setOpenDialog,
  };
};

export { HeaderHook };
