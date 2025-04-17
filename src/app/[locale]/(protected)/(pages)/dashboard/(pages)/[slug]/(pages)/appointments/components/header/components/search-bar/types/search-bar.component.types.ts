// Types
import type { Dispatch, SetStateAction } from "react";

type SearchBarProps = {
  openSearchBar: boolean;
  setOpenSearchBar: Dispatch<SetStateAction<boolean>>;
};

export type { SearchBarProps };
