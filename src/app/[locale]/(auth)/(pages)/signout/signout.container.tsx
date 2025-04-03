"use client";
// Vendors
import { useEffect } from "react";
import { useTranslations } from "next-intl";
// Actions
import { signOutAction } from "./actions/signout.actions";
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

const SignOutContainer = () => {
  const t = useTranslations("signout.page");

  useEffect(() => {
    const signOut = async () => {
      await signOutAction();
    };

    signOut();
  }, []);

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
};

export { SignOutContainer };
