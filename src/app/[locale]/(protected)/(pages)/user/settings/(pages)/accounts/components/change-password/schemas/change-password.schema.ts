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

const getChangePasswordSchema = (t: (arg: string) => string) =>
  z
    .object({
      currentPassword: z
        .string()
        .trim()
        .min(1, { error: t("schemas.changePassword.currentPassword.required") })
        .min(6, { error: t("schemas.changePassword.currentPassword.min") })
        .max(32, { error: t("schemas.changePassword.currentPassword.max") }),
      newPassword: z
        .string()
        .trim()
        .min(1, { error: t("schemas.changePassword.newPassword.required") })
        .min(6, { error: t("schemas.changePassword.newPassword.min") })
        .max(32, { error: t("schemas.changePassword.newPassword.max") })
        .superRefine((value, ctx) => {
          passwordRules.forEach((rule) => {
            if (!rule.test(value)) {
              ctx.addIssue({
                code: "custom",
                message: t(
                  `schemas.changePassword.newPassword.rules.${rule.key}`,
                ),
              });
            }
          });
        }),
    })
    .refine((data) => data.currentPassword !== data.newPassword, {
      path: ["newPassword"],
      error: t("schemas.changePassword.newPassword.sameAsCurrent"),
    });

export { getChangePasswordSchema };
