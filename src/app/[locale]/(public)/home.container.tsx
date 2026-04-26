"use client";
// Vendors
import { useTranslations } from "next-intl";
import {
  Building2,
  ShieldIcon,
  LayoutGridIcon,
  UsersIcon,
  FileTextIcon,
  ActivityIcon,
  CloudIcon,
  UserCheckIcon,
  ZapIcon,
} from "lucide-react";
// Components
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/components/ui/link";

const featureIcons = [
  Building2,
  ShieldIcon,
  LayoutGridIcon,
  UsersIcon,
  FileTextIcon,
  ActivityIcon,
];

const benefitIcons = [CloudIcon, UserCheckIcon, ZapIcon];

const HomeContainer = () => {
  const t = useTranslations("home");

  const features = t.raw("features.items") as Array<{
    title: string;
    description: string;
  }>;
  const benefits = t.raw("benefits.items") as Array<{
    title: string;
    description: string;
  }>;
  const steps = t.raw("howItWorks.steps") as Array<{
    number: string;
    title: string;
    description: string;
  }>;
  const faqItems = t.raw("faq.items") as Array<{
    question: string;
    answer: string;
  }>;
  const aboutItems = t.raw("about.items") as Array<{
    label: string;
    description: string;
  }>;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="flex flex-col items-center justify-center px-4 py-24 text-center md:py-36">
        <div className="flex max-w-3xl flex-col items-center gap-6">
          <Badge variant="outline" className="text-muted-foreground">
            {t("hero.badge")}
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="text-muted-foreground max-w-xl text-lg">
            {t("hero.description")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              nativeButton={false}
              render={<Link href="/signup" />}
            >
              {t("hero.actions.primary")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<Link href="/signin" />}
            >
              {t("hero.actions.secondary")}
            </Button>
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────────── */}
      <section className="bg-muted/50 border-y py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight md:text-3xl">
              {t("about.title")}
            </h2>
            <p className="text-muted-foreground">{t("about.description")}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {aboutItems.map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <Separator className="mb-1 w-8" />
                <span className="text-sm font-medium">{item.label}</span>
                <span className="text-muted-foreground text-sm">
                  {item.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ─────────────────────────────────────────────── */}
      <section id="features" className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Badge variant="outline" className="text-muted-foreground mb-4">
              {t("features.badge")}
            </Badge>
            <h2 className="mb-4 text-2xl font-semibold tracking-tight md:text-3xl">
              {t("features.title")}
            </h2>
            <p className="text-muted-foreground">{t("features.description")}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => {
              const Icon = featureIcons[i];
              return (
                <Card key={i}>
                  <CardHeader>
                    <div className="bg-muted mb-3 flex size-9 items-center justify-center rounded-md">
                      <Icon className="size-4" />
                    </div>
                    <CardTitle className="text-base">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Benefits ─────────────────────────────────────────────── */}
      <section className="bg-muted/50 border-y py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Badge variant="outline" className="text-muted-foreground mb-4">
              {t("benefits.badge")}
            </Badge>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {t("benefits.title")}
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {benefits.map((benefit, i) => {
              const Icon = benefitIcons[i];
              return (
                <div key={i} className="flex flex-col gap-3">
                  <div className="bg-background flex size-10 items-center justify-center rounded-md border">
                    <Icon className="size-4" />
                  </div>
                  <h3 className="text-sm font-medium">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────── */}
      <section id="how-it-works" className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Badge variant="outline" className="text-muted-foreground mb-4">
              {t("howItWorks.badge")}
            </Badge>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {t("howItWorks.title")}
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={i} className="flex flex-col gap-3">
                <span className="text-muted-foreground/40 text-5xl font-semibold tabular-nums">
                  {step.number}
                </span>
                <h3 className="text-sm font-medium">{step.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section id="faq" className="bg-muted/50 border-y py-20 md:py-24">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <Badge variant="outline" className="text-muted-foreground mb-4">
              {t("faq.badge")}
            </Badge>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {t("faq.title")}
            </h2>
          </div>
          <dl className="divide-y overflow-hidden rounded-lg border">
            {faqItems.map((item, i) => (
              <div key={i} className="bg-background px-6 py-5">
                <dt className="mb-2 text-sm font-medium">{item.question}</dt>
                <dd className="text-muted-foreground text-sm">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="bg-primary text-primary-foreground flex flex-col items-center gap-6 rounded-xl px-8 py-16 text-center">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {t("cta.title")}
            </h2>
            <p className="text-primary-foreground/70 max-w-md text-sm">
              {t("cta.description")}
            </p>
            <Button
              size="lg"
              variant="secondary"
              nativeButton={false}
              render={<Link href="/signup" />}
            >
              {t("cta.action")}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export { HomeContainer };
