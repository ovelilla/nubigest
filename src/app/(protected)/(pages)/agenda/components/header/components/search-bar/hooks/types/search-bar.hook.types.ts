// Types
import type { Dispatch, SetStateAction } from "react";
import type { SearchBarHandlersReturn } from "../../handlers/types/search-bar.handlers.types";

type SearchBarHookProps = {
  setOpenSearchBar: Dispatch<SetStateAction<boolean>>;
};

type SearchBarHookReturn = SearchBarHandlersReturn;

export type { SearchBarHookProps, SearchBarHookReturn };
