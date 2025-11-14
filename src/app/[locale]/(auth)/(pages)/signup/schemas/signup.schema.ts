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

const getSignUpSchema = (t: (arg: string) => string) =>
  z.object({
    name: z
      .string({ error: t("schemas.signup.name.required") })
      .trim()
      .min(1, t("schemas.signup.name.min"))
      .max(64, t("schemas.signup.name.max")),
    email: z
      .string()
      .trim()
      .min(1, { error: t("schemas.signup.email.required") })
      .max(254, { error: t("schemas.signup.email.max") })
      .pipe(z.email({ error: t("schemas.signup.email.invalid") }))
      .transform((s) => s.toLowerCase()),
    password: z
      .string()
      .trim()
      .min(1, t("schemas.signup.password.required"))
      .min(6, t("schemas.signup.password.min"))
      .max(32, t("schemas.signup.password.max"))
      .superRefine((value, ctx) => {
        passwordRules.forEach((rule) => {
          if (!rule.test(value)) {
            ctx.addIssue({
              code: "custom",
              message: t(`schemas.signup.password.rules.${rule.key}`),
            });
          }
        });
      }),
  });

export { getSignUpSchema };
