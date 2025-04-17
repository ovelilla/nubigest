// Icons
import { LoaderCircle } from "lucide-react";

const PageLoader = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <LoaderCircle className="h-20 w-20 animate-spin" strokeWidth={1} />
    </div>
  );
};

export { PageLoader };
