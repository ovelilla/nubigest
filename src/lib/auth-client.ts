import { createAuthClient } from "better-auth/react";
import {
  organizationClient,
  twoFactorClient,
  usernameClient,
} from "better-auth/client/plugins";
import { passkeyClient } from "@better-auth/passkey/client";

export const authClient = createAuthClient({
  plugins: [
    organizationClient({
      teams: {
        enabled: true,
      },
    }),
    passkeyClient(),
    twoFactorClient(),
    usernameClient(),
  ],
});
