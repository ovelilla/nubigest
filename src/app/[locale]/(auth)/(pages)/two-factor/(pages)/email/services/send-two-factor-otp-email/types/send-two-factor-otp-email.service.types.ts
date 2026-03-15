type SendTwoFactorOtpEmail = (props: {
  email: string;
  otp: string;
}) => Promise<void>;

export type { SendTwoFactorOtpEmail };
