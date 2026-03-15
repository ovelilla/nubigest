type OrgSlugLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
    orgSlug: string;
  }>;
};

export type { OrgSlugLayoutProps };
