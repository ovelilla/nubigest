// Vendors
import * as z from "zod";

const getPasskeySchema = (t: (arg: string) => string) =>
  z.object({
    name: z
      .string({ error: t("schemas.passkey.name.required") })
      .trim()
      .min(1, t("schemas.passkey.name.min"))
      .max(64, t("schemas.passkey.name.max")),
  });

export { getPasskeySchema };
