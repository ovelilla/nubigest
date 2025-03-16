// Handlers
import { SearchBarHandlers } from "../handlers/search-bar.handlers";
// Types
import type {
  SearchBarHookProps,
  SearchBarHookReturn,
} from "./types/search-bar.hook.types";

const SearchBarHook = ({
  setOpenSearchBar,
}: SearchBarHookProps): SearchBarHookReturn => {
  const { handleCloseSearchBar } = SearchBarHandlers({
    setOpenSearchBar,
  });

  return {
    handleCloseSearchBar,
  };
};

export { SearchBarHook };
