type SendTwoFactorOtpEmail = (props: {
  email: string;
  token: string;
}) => Promise<void>;

export type { SendTwoFactorOtpEmail };
