// Vendors
import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
// i18n
import { routing } from "@/i18n/routing";
// Components
import { Toaster } from "@/components/ui/sonner";
// Constants
import { RTL_LOCALES } from "@/i18n/constants/i18n.constants";
// Fonts
import { Inter, Noto_Sans_Arabic } from "next/font/google";
// Providers
import { DirectionProvider } from "@/components/ui/direction";
import { NextIntlClientProvider } from "next-intl";
import { QueryClientProvider } from "@/providers/query-client/query-client.provider";
import { ThemeProvider } from "@wrksz/themes/next";
import { TooltipProvider } from "@/components/ui/tooltip";
// Styles
import "../globals.css";
// Types
import type { Metadata } from "next";
import type { Locale } from "next-intl";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
});

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const t = await getTranslations({
    locale,
    namespace: "rootLayout.metadata",
  });

  return {
    title: t("title"),
    description: t("description"),
  };
}

async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const direction = RTL_LOCALES.includes(locale) ? "rtl" : "ltr";

  return (
    <html
      className={`${inter.variable} ${notoSansArabic.variable}`}
      dir={direction}
      lang={locale}
      suppressHydrationWarning
    >
      <body className={"flex min-h-dvh antialiased"}>
        <NextIntlClientProvider>
          <DirectionProvider direction={direction}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <QueryClientProvider>
                <TooltipProvider>
                  {children}
                  <Toaster />
                </TooltipProvider>
              </QueryClientProvider>
            </ThemeProvider>
          </DirectionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;
