// Types
import type { Dispatch, SetStateAction } from "react";

type SearchButtonHandlersProps = {
  setOpenSearchBar: Dispatch<SetStateAction<boolean>>;
};

type SearchButtonHandlersReturn = {
  handleSearchButtonClick: () => void;
};

type SearchButtonClickHandlerProps = Pick<
  SearchButtonHandlersProps,
  "setOpenSearchBar"
>;

export type {
  SearchButtonHandlersProps,
  SearchButtonHandlersReturn,
  SearchButtonClickHandlerProps,
};
