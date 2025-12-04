const DEFAULT_LOCALE = "en" as const;
const LOCALES = ["en", "es"] as const;
const PATHNAMES = {
  "/": "/",
  "/signin": { es: "/iniciar-sesion" },
  "/signup": { es: "/registrarse" },
  "/two-factor": { es: "/doble-verificacion" },
  "/verify": { es: "/verificar" },
  "/forgot-password": { es: "/recuperar-contrasena" },
  "/reset-password": { es: "/restablecer-contrasena" },
  "/dashboard": { es: "/panel" },
} as const;

export { DEFAULT_LOCALE, LOCALES, PATHNAMES };
