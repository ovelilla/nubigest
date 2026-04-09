// Auth
import { authClient } from "@/lib/auth-client";

const listUserPasskeys = async () => {
  const { data, error } = await authClient.passkey.listUserPasskeys();

  if (error) {
    throw new Error("Could not load passkeys");
  }

  return data;
};

export { listUserPasskeys };
