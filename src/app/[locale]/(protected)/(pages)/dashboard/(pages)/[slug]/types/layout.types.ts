type OrganizationLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export type { OrganizationLayoutProps };
