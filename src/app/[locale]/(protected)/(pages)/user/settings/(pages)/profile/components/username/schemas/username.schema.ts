// Vendors
import * as z from "zod";

const USERNAME_REGEX = /^[a-zA-Z0-9._]+$/;

const getUsernameSchema = (t: (arg: string) => string) =>
  z.object({
    username: z
      .string({ error: t("schemas.username.username.required") })
      .trim()
      .min(3, t("schemas.username.username.min"))
      .max(30, t("schemas.username.username.max"))
      .regex(USERNAME_REGEX, t("schemas.username.username.invalid"))
      .transform((value) => value.toLowerCase()),
  });

export { getUsernameSchema };
