// Vendors
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { getTranslations } from "next-intl/server";
// Types
import type { TwoFactorTokenProps } from "./types/two-factor-token.types";

const TwoFactorTokenEmail = async ({ token }: TwoFactorTokenProps) => {
  const t = await getTranslations("signin.emails.twoFactorToken.content");

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

            <Section className="mt-6 rounded-lg bg-slate-50">
              <Text className="text-center text-5xl font-medium tracking-widest text-slate-700">
                {token}
              </Text>
              <Text className="text-center text-lg text-slate-500">
                {t("secondParagraph")}
              </Text>
            </Section>

            <Section className="mt-6">
              <Text className="text-lg text-slate-700">
                {t("thirdParagraph")}
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

export { TwoFactorTokenEmail };
