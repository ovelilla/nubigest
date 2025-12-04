// Vendors
import { getTranslations } from "next-intl/server";
import { Resend } from "resend";
// Emails
import { TwoFactorOtpEmail } from "../../emails/two-factor-otp/two-factor-otp.email";
// Types
import type { SendTwoFactorOtpEmail } from "./types/send-two-factor-otp-email.service.types";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendTwoFactorOtpEmail: SendTwoFactorOtpEmail = async ({
  email,
  token,
}) => {
  const t = await getTranslations("twoFactor.emails.twoFactorOtp");

  void resend.emails.send({
    from: "Nubigest <noreply@nubigest.com>",
    to: email,
    subject: t("subject"),
    react: <TwoFactorOtpEmail token={token} />,
  });
};

export { sendTwoFactorOtpEmail };
