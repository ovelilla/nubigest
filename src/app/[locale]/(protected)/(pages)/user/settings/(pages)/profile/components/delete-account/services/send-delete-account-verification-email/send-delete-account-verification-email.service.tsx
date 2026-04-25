// Vendors
import { getTranslations } from "next-intl/server";
import { Resend } from "resend";
// Emails
import { DeleteAccountEmail } from "../../emails/delete-account/delete-account.email";
// Types
import type { SendDeleteAccountVerificationEmail } from "./types/send-delete-account-verification-email.service.types";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendDeleteAccountVerificationEmail: SendDeleteAccountVerificationEmail =
  async ({ email, url }) => {
    const t = await getTranslations(
      "profileSettings.components.deleteAccount.emails.deleteAccount",
    );

    void resend.emails.send({
      from: "Nubigest <noreply@nubigest.com>",
      to: email,
      subject: t("subject"),
      react: <DeleteAccountEmail url={url} email={email} />,
    });
  };

export { sendDeleteAccountVerificationEmail };
