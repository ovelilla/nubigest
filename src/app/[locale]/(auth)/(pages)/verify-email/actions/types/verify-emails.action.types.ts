type VerifyEmailActionProps = {
  token?: string;
};

type VerifyEmailSuccess = {
  status: "success";
  message: string;
};

type VerifyEmailError = {
  status: "error";
  message: string;
};

type VerifyEmailActionReturn = VerifyEmailSuccess | VerifyEmailError;

export type { VerifyEmailActionProps, VerifyEmailActionReturn };
