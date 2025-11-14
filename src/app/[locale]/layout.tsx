// Vendors
import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
// i18n
import { routing } from "@/i18n/routing";
// Components
import { Toaster } from "@/components/ui/sonner";
// Fonts
import { Inter } from "next/font/google";
// Providers
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { TooltipProvider } from "@/components/ui/tooltip";
// Styles
import "../globals.css";
// Types
import type { Metadata } from "next";
import type { Locale } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

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
    namespace: "appLayout.metadata",
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

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`flex min-h-dvh antialiased ${inter.className}`}>
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider>{children}</TooltipProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}

export default RootLayout;
