const DEFAULT_LOCALE = "en" as const;
const LOCALES = ["en", "es"] as const;
const PATHNAMES = {
  "/": "/",
  "/signin": { es: "/iniciar-sesion" },
  "/signup": { es: "/registrarse" },
  "/two-factor": { es: "/verificacion-en-dos-pasos" },
  "/two-factor/authenticator": {
    es: "/verificacion-en-dos-pasos/autenticador",
  },
  "/two-factor/email": { es: "/verificacion-en-dos-pasos/correo" },
  "/two-factor/backup": { es: "/verificacion-en-dos-pasos/respaldo" },
  "/verify": { es: "/verificar" },
  "/forgot-password": { es: "/recuperar-contrasena" },
  "/reset-password": { es: "/restablecer-contrasena" },
  "/org": { es: "/org" },
  "/org/[orgSlug]/dashboard": { es: "/org/[orgSlug]/panel" },
  "/org/[orgSlug]/team/[teamId]/dashboard": {
    es: "/org/[orgSlug]/equipo/[teamId]/panel",
  },
  "/user/settings": { es: "/usuario/ajustes" },
  "/user/settings/account": { es: "/usuario/ajustes/cuenta" },
  "/user/settings/profile": { es: "/usuario/ajustes/perfil" },
  "/user/settings/security": { es: "/usuario/ajustes/seguridad" },
  "/user/settings/appearance": { es: "/usuario/ajustes/apariencia" },
  "/user/settings/notifications": { es: "/usuario/ajustes/notificaciones" },
  "/user/settings/privacy": { es: "/usuario/ajustes/privacidad" },
} as const;

export { DEFAULT_LOCALE, LOCALES, PATHNAMES };
