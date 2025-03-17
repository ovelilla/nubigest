// Vendors
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
// Components
import { ButtonLink } from "@/components/ui/button-link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "./components/form/login-form.component";
// Constants
import constants from "./constants/login.constants";

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

const LoginPage = () => {
  const t = useTranslations("LoginPage");
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t("title")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>

      <CardContent>
        <LoginForm />
      </CardContent>

      <CardFooter>
        <ButtonLink {...constants.BUTTON_LINK} />
      </CardFooter>
    </Card>
  );
};

export default LoginPage;
