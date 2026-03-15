// Vendors
import { useTranslations } from "next-intl";
import Link from "next/link";
// Components
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <Empty>
      <EmptyHeader>
        <EmptyTitle>{t("title")}</EmptyTitle>
        <EmptyDescription>{t("description")}</EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button
            nativeButton={false}
            render={
              <Link href="/" prefetch={false}>
                {t("backToHome")}
              </Link>
            }
          />
          <Button
            nativeButton={false}
            render={
              <Link href="/org" prefetch={false}>
                {t("backToDashboard")}
              </Link>
            }
            variant="outline"
          />
        </div>
      </EmptyContent>
    </Empty>
  );
}
