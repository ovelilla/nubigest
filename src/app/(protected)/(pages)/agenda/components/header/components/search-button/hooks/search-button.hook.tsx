// Handlers
import { SearchButtonHandlers } from "../handlers/search-button.handlers";
// Types
import type {
  SearchButtonHookProps,
  SearchButtonHookReturn,
} from "./types/search-button.hook.types";

const SearchButtonHook = ({
  setOpenSearchBar,
}: SearchButtonHookProps): SearchButtonHookReturn => {
  const { handleSearchButtonClick } = SearchButtonHandlers({
    setOpenSearchBar,
  });

  return {
    handleSearchButtonClick,
  };
};

export { SearchButtonHook };
