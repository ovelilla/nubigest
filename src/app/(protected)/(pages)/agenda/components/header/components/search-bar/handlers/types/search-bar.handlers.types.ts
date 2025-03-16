// Types
import type { Dispatch, SetStateAction } from "react";

type SearchBarHandlersProps = {
  setOpenSearchBar: Dispatch<SetStateAction<boolean>>;
};

type SearchBarHandlersReturn = {
  handleCloseSearchBar: () => void;
};

type CloseSearchBarHandlerProps = Pick<
  SearchBarHandlersProps,
  "setOpenSearchBar"
>;

export type {
  CloseSearchBarHandlerProps,
  SearchBarHandlersProps,
  SearchBarHandlersReturn,
};
