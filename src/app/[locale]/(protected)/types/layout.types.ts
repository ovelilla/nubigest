type ProtectedLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export type { ProtectedLayoutProps };
