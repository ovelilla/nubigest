// Vendors
import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { getTranslations } from "next-intl/server";
// Types
import type { PasswordResetTokenEmailProps } from "./types/password-reset-token.types";

const PasswordResetTokenEmail = async ({
  token,
}: PasswordResetTokenEmailProps) => {
  const t = await getTranslations(
    "forgotPassword.emails.passwordResetToken.content",
  );

  const link = `${process.env.NEXT_PUBLIC_APP_URL}/new-password?token=${token}`;

  return (
    <Html>
      <Head />
      <Preview>{t("previewText")}</Preview>
      <Tailwind>
        <Body className="m-0 bg-slate-50 p-4 font-sans">
          <Container className="max-w-lg rounded-lg bg-white p-8">
            <Section>
              <Text className="text-3xl font-semibold text-slate-700">
                {t("title")}
              </Text>
              <Text className="text-lg text-slate-700">
                {t("firstParagraph")}
              </Text>
            </Section>

            <Section className="mt-6">
              <Button
                className="text-md rounded-md bg-slate-700 px-4 py-2 font-medium whitespace-nowrap text-white"
                href={link}
              >
                {t("button")}
              </Button>
            </Section>

            <Section className="mt-6">
              <Text className="text-lg text-slate-700">
                {t("secondParagraph")} <br />
                <Link href={link}>{link}</Link>
              </Text>
            </Section>

            <Hr className="my-4 border-t border-slate-300" />

            <Section>
              <Text className="text-sm text-slate-400">{t("footer")}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export { PasswordResetTokenEmail };
