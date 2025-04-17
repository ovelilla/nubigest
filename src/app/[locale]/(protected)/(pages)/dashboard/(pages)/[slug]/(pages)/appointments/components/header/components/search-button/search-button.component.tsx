// Components
import { Button } from "@/components/ui/button";
// Hooks
import { SearchButtonHook } from "./hooks/search-button.hook";
// Icons
import { Search } from "lucide-react";
// Types
import type { SearchButtonProps } from "./types/search-button.component.types";

const SearchButton = ({ setOpenSearchBar }: SearchButtonProps) => {
  const { handleSearchButtonClick } = SearchButtonHook({ setOpenSearchBar });

  return (
    <Button
      aria-label="Buscar"
      size="icon"
      variant="ghost"
      onClick={handleSearchButtonClick}
    >
      <Search />
    </Button>
  );
};

export { SearchButton };
