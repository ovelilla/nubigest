// Vendors
import { getTranslations } from "next-intl/server";
// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// Icons
import { LoaderCircle } from "lucide-react";

export default async function Loading() {
  const t = await getTranslations("verifyEmail.loading");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("card.header.title")}</CardTitle>
        <CardDescription>{t("card.header.description")}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-center">
          <LoaderCircle className="size-20 animate-spin stroke-1" />
        </div>
      </CardContent>
    </Card>
  );
}
