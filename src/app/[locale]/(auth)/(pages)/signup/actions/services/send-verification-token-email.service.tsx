// Vendors
import { getTranslations } from "next-intl/server";
import { Resend } from "resend";
// Emails
import { VerificationTokenEmail } from "../../emails/verification-token/verification-token.email";
// Types
import type { SendVerificationTokenEmailProps } from "./types/send-verification-token-email.types";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendVerificationTokenEmail = async ({
  email,
  url,
}: SendVerificationTokenEmailProps): Promise<void> => {
  const t = await getTranslations("signup.emails.verificationToken");

  await resend.emails.send({
    from: "Nubigest <noreply@nubigest.com>",
    to: email,
    subject: t("subject"),
    react: <VerificationTokenEmail url={url} email={email} />,
  });
};

export { sendVerificationTokenEmail };
