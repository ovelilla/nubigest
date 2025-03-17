// Components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// Hooks
import { SearchBarHook } from "./hooks/search-bar.hook";
// Icons
import { X } from "lucide-react";
// Types
import type { SearchBarProps } from "./types/search-bar.component.types";

const SearchBar = ({ openSearchBar, setOpenSearchBar }: SearchBarProps) => {
  const { handleCloseSearchBar } = SearchBarHook({
    setOpenSearchBar,
  });

  if (!openSearchBar) {
    return null;
  }

  return (
    <div className="bg-background absolute inset-0 flex items-center gap-2 px-2 sm:gap-4 sm:px-4">
      <Input type="search" placeholder="Buscar" autoFocus={true} />
      <Button size="icon" variant="ghost" onClick={handleCloseSearchBar}>
        <X />
      </Button>
    </div>
  );
};

export { SearchBar };
