type SendDeleteAccountVerificationEmail = (props: {
  email: string;
  url: string;
}) => Promise<void>;

export type { SendDeleteAccountVerificationEmail };
