type GlobalLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export type { GlobalLayoutProps };
