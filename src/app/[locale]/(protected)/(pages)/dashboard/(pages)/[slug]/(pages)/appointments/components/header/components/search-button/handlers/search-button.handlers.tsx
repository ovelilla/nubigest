// Types
import type {
  SearchButtonHandlersProps,
  SearchButtonHandlersReturn,
  SearchButtonClickHandlerProps,
} from "./types/search-button.handlers.types";

const searchButtonClickHandler = ({
  setOpenSearchBar,
}: SearchButtonClickHandlerProps): void => {
  setOpenSearchBar(true);
};

const SearchButtonHandlers = ({
  setOpenSearchBar,
}: SearchButtonHandlersProps): SearchButtonHandlersReturn => {
  return {
    handleSearchButtonClick: () =>
      searchButtonClickHandler({ setOpenSearchBar }),
  };
};

export { SearchButtonHandlers };
