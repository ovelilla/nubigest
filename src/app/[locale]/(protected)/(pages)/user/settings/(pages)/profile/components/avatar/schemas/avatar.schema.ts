// Vendors
import * as z from "zod";
// Constants
import {
  ACCEPTED_IMAGE_TYPES,
  MAX_FILE_SIZE,
} from "../constants/avatar.constants";

const getAvatarSchema = (t: (arg: string) => string) =>
  z.object({
    file: z
      .instanceof(File, {
        error: t("schemas.avatar.file.required"),
      })
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
        t("schemas.avatar.file.invalidType"),
      )
      .refine(
        (file) => file.size <= MAX_FILE_SIZE,
        t("schemas.avatar.file.max"),
      ),
  });

export { getAvatarSchema };
