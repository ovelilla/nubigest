// Types
import type {
  CloseSearchBarHandlerProps,
  SearchBarHandlersProps,
  SearchBarHandlersReturn,
} from "./types/search-bar.handlers.types";

const closeSearchBarHandler = ({
  setOpenSearchBar,
}: CloseSearchBarHandlerProps) => {
  setOpenSearchBar(false);
};

const SearchBarHandlers = ({
  setOpenSearchBar,
}: SearchBarHandlersProps): SearchBarHandlersReturn => {
  return {
    handleCloseSearchBar: () => closeSearchBarHandler({ setOpenSearchBar }),
  };
};

export { SearchBarHandlers };
