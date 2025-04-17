const DEFAULT_LOCALE = "en" as const;
const LOCALES = ["en", "es"] as const;
const PATHNAMES = {
  "/": "/",
  "/signin": {
    es: "/iniciar-sesion",
  },
  "/signup": {
    es: "/registrarse",
  },
  "/forgot-password": {
    es: "/recuperar-contrasena",
  },
  "/reset-password": {
    es: "/restablecer-contrasena",
  },
  "/verify-email": {
    es: "/verificar-correo",
  },
  "/signout": {
    es: "/cerrar-sesion",
  },
  "/auth-error": {
    es: "/error-autenticacion",
  },
  "/dashboard": {
    es: "/panel",
  },
  "/dashboard/global": {
    es: "/panel/global",
  },
  "/dashboard/global/events": {
    es: "/panel/global/eventos",
  },
  "/dashboard/global/organizations": {
    es: "/panel/global/organizaciones",
  },
  "/dashboard/global/users": {
    es: "/panel/global/usuarios",
  },
  "/dashboard/[slug]": {
    es: "/panel/[slug]",
  },
  "/dashboard/[slug]/appointments": {
    es: "/panel/[slug]/agenda",
  },
  "/dashboard/[slug]/clients": {
    es: "/panel/[slug]/clientes",
  },
  "/dashboard/[slug]/services": {
    es: "/panel/[slug]/servicios",
  },
} as const;

export { DEFAULT_LOCALE, LOCALES, PATHNAMES };
