type SetPasswordAction = (props: { newPassword: string }) => Promise<{
  status: boolean;
}>;

export type { SetPasswordAction };
