type GetIsProtectedRoute = (props: {
  path: string;
  protectedPrefixes: string[];
}) => boolean;

export type { GetIsProtectedRoute };
