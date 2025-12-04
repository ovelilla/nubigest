// Vendors
import { getTranslations } from "next-intl/server";
import { Resend } from "resend";
// Templates
import { ResetPassword } from "../emails/reset-password/reset-password.email";
// Types
import { SendResetPasswordEmailProps } from "./types/send-reset-password-email.types";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendResetPasswordEmail = async ({
  email,
  url,
}: SendResetPasswordEmailProps): Promise<void> => {
  const t = await getTranslations("forgotPassword.emails.resetPassword");

  void resend.emails.send({
    from: "Nubigest <noreply@nubigest.com>",
    to: email,
    subject: t("subject"),
    react: <ResetPassword url={url} />,
  });
};

export { sendResetPasswordEmail };
