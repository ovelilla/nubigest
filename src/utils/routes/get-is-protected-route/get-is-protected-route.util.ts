// Types
import type { GetIsProtectedRoute } from "./types/get-is-protected-route.util.types";

const getIsProtectedRoute: GetIsProtectedRoute = ({
  path,
  protectedPrefixes,
}) => {
  return protectedPrefixes.some(
    (prefix) => path === prefix || path.startsWith(`${prefix}/`),
  );
};

export { getIsProtectedRoute };
