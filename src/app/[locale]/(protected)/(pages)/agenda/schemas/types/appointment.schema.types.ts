// Vendors
import * as z from "zod";
// Schemas
import { appointmentSchema } from "../appointment.schema";

export type AppointmentSchema = z.infer<typeof appointmentSchema>;
