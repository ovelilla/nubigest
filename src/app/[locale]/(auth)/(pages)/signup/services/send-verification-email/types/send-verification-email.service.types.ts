type SendVerificationEmail = (props: {
  email: string;
  url: string;
}) => Promise<void>;

export type { SendVerificationEmail };
