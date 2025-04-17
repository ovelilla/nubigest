// Components
import { AppointmentsContainer } from "./appointments.container";
// Styles
import "./styles.css";
// Types
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Appointments",
  description: "Appointments page",
};

const AppointmentsPage = () => {
  return <AppointmentsContainer />;
};

export default AppointmentsPage;
