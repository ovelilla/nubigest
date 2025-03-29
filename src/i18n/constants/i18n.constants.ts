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
  "/dashboard": {
    es: "/inicio",
  },
} as const;

export { DEFAULT_LOCALE, LOCALES, PATHNAMES };
