// Vendors
import * as z from "zod";

const appointmentSchema = z.object({
  start: z.date(),
  end: z.date(),
});

export { appointmentSchema };
