// Components
import { Spinner } from "@/components/ui/spinner";

const PageLoader = () => (
  <div className="flex h-full w-full items-center justify-center">
    <Spinner className="h-20 w-20" />
  </div>
);

export { PageLoader };
