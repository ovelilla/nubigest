// Components
import { Button } from "@/components/ui/button";
// Icons
import { Plus } from "lucide-react";

const CreateButton = () => {
  return (
    <Button aria-label="Crear" size="icon" variant="ghost">
      <Plus />
    </Button>
  );
};

export { CreateButton };
