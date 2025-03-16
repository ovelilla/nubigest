// Icons
import { Calendar, ChartLine, Home, Settings, Users } from "lucide-react";

const ITEMS = {
  navMain: [
    {
      title: "Principal",
      url: "/",
      icon: Home,
    },
    {
      title: "Agenda",
      url: "/agenda",
      icon: Calendar,
    },
    {
      title: "Clientes",
      url: "/clientes",
      icon: Users,
    },
    {
      title: "Administración",
      url: "#",
      icon: ChartLine,
      items: [
        {
          title: "Presupuestos",
          url: "/administracion/presupuestos",
        },
      ],
    },
    {
      title: "Ajustes",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "General",
          url: "/ajustes",
        },
        {
          title: "Usuarios",
          url: "/usuarios",
        },
      ],
    },
  ],
};

export { ITEMS };
