// Vendors
import { getTranslations } from "next-intl/server";
import { Resend } from "resend";
// Emails
import { TwoFactorTokenEmail } from "../../emails/two-factor-token/two-factor-token.email";
// Types
import type { SendTwoFactorTokenEmailProps } from "./types/send-two-factor-token-email.util.types";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendTwoFactorTokenEmail = async ({
  email,
  token,
}: SendTwoFactorTokenEmailProps): Promise<void> => {
  const t = await getTranslations("signin.emails.twoFactorToken");

  await resend.emails.send({
    from: "Nubigest <noreply@nubigest.com>",
    to: email,
    subject: t("subject"),
    react: <TwoFactorTokenEmail token={token} />,
  });
};

export { sendTwoFactorTokenEmail };
