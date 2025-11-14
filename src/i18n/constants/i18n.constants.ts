const DEFAULT_LOCALE = "en" as const;
const LOCALES = ["en", "es"] as const;
const PATHNAMES = {
  "/": "/",
  "/signin": { es: "/iniciar-sesion" },
  "/signup": { es: "/registrarse" },
  "/2fa": { es: "/2fa" },
  "/forgot-password": { es: "/recuperar-contrasena" },
  "/reset-password": { es: "/restablecer-contrasena" },
  "/verify-email": { es: "/verificar-correo" },
  "/signout": { es: "/cerrar-sesion" },
  "/auth-error": { es: "/error-autenticacion" },
  "/dashboard": { es: "/panel" },
} as const;

export { DEFAULT_LOCALE, LOCALES, PATHNAMES };
