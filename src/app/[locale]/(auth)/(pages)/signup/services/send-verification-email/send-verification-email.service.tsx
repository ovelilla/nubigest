// Vendors
import { getTranslations } from "next-intl/server";
import { Resend } from "resend";
// Emails
import { VerificationEmail } from "../../emails/verification/verification.email";
// Types
import type { SendVerificationEmail } from "./types/send-verification-email.service.types";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendVerificationEmail: SendVerificationEmail = async ({ email, url }) => {
  const t = await getTranslations("signup.emails.verification");

  void resend.emails.send({
    from: "Nubigest <noreply@nubigest.com>",
    to: email,
    subject: t("subject"),
    react: <VerificationEmail url={url} email={email} />,
  });
};

export { sendVerificationEmail };
