// Vendors
import { Analytics } from "@vercel/analytics/react";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { SessionProvider } from "next-auth/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
// Auth
import { auth } from "../../auth";
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

const inter = Inter({
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return {
    title: locale === "es" ? "Nubigest ERP" : "Nubigest ERP",
    description:
      locale === "es"
        ? "ERP de gestión empresarial"
        : "Business management ERP",
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

  const session = await auth();

  return (
    <SessionProvider session={session}>
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
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </SessionProvider>
  );
}

export default RootLayout;
