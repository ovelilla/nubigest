// Types
import type { Dispatch, SetStateAction } from "react";
import type { SearchButtonHandlersReturn } from "../../handlers/types/search-button.handlers.types";

type SearchButtonHookProps = {
  setOpenSearchBar: Dispatch<SetStateAction<boolean>>;
};

type SearchButtonHookReturn = SearchButtonHandlersReturn;

export type { SearchButtonHookProps, SearchButtonHookReturn };
