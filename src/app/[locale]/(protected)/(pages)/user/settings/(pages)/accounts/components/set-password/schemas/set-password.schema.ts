// Vendors
import * as z from "zod";

export const passwordRules = [
  {
    key: "length",
    test: (v: string) => v.length >= 6,
  },
  {
    key: "lowercase",
    test: (v: string) => /[a-z]/.test(v),
  },
  {
    key: "number",
    test: (v: string) => /\d/.test(v),
  },
  {
    key: "special",
    test: (v: string) => /[^a-zA-Z0-9]/.test(v),
  },
  {
    key: "uppercase",
    test: (v: string) => /[A-Z]/.test(v),
  },
];

const getSetPasswordSchema = (t: (arg: string) => string) =>
  z.object({
    password: z
      .string()
      .trim()
      .min(1, t("schemas.setPassword.password.required"))
      .min(6, t("schemas.setPassword.password.min"))
      .max(32, t("schemas.setPassword.password.max"))
      .superRefine((value, ctx) => {
        passwordRules.forEach((rule) => {
          if (!rule.test(value)) {
            ctx.addIssue({
              code: "custom",
              message: t(`schemas.setPassword.password.rules.${rule.key}`),
            });
          }
        });
      }),
  });

export { getSetPasswordSchema };
