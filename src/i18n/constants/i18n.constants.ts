const DEFAULT_LOCALE = "en" as const;
const LOCALES = ["en", "es", "ar"] as const;
const RTL_LOCALES = ["ar"];
const PATHNAMES = {
  "/": "/",
  "/signin": {
    es: "/iniciar-sesion",
    ar: "/تسجيل-الدخول",
  },
  "/signup": {
    es: "/registrarse",
    ar: "/إنشاء-حساب",
  },
  "/two-factor": {
    es: "/verificacion-en-dos-pasos",
    ar: "/التحقق-بخطوتين",
  },
  "/two-factor/authenticator": {
    es: "/verificacion-en-dos-pasos/autenticador",
    ar: "/التحقق-بخطوتين/تطبيق-المصادقة",
  },
  "/two-factor/email": {
    es: "/verificacion-en-dos-pasos/correo",
    ar: "/التحقق-بخطوتين/البريد-الإلكتروني",
  },
  "/two-factor/backup": {
    es: "/verificacion-en-dos-pasos/respaldo",
    ar: "/التحقق-بخطوتين/رموز-احتياطية",
  },
  "/verify": {
    es: "/verificar",
    ar: "/تأكيد",
  },
  "/forgot-password": {
    es: "/recuperar-contrasena",
    ar: "/نسيت-كلمة-المرور",
  },
  "/reset-password": {
    es: "/restablecer-contrasena",
    ar: "/إعادة-تعيين-كلمة-المرور",
  },
  "/org": {
    es: "/org",
    ar: "/منظمة",
  },
  "/org/[orgSlug]/dashboard": {
    es: "/org/[orgSlug]/panel",
    ar: "/منظمة/[orgSlug]/لوحة-التحكم",
  },
  "/org/[orgSlug]/team/[teamId]/dashboard": {
    es: "/org/[orgSlug]/equipo/[teamId]/panel",
    ar: "/منظمة/[orgSlug]/فريق/[teamId]/لوحة-التحكم",
  },
  "/user/settings": {
    es: "/usuario/ajustes",
    ar: "/المستخدم/الإعدادات",
  },
  "/user/settings/profile": {
    es: "/usuario/ajustes/perfil",
    ar: "/المستخدم/الإعدادات/الملف-الشخصي",
  },
  "/user/settings/security": {
    es: "/usuario/ajustes/seguridad",
    ar: "/المستخدم/الإعدادات/الأمان",
  },
  "/user/settings/sessions": {
    es: "/usuario/ajustes/sesiones",
    ar: "/المستخدم/الإعدادات/الجلسات",
  },
  "/user/settings/accounts": {
    es: "/usuario/ajustes/cuentas",
    ar: "/المستخدم/الإعدادات/الحسابات",
  },
  "/user/settings/appearance": {
    es: "/usuario/ajustes/apariencia",
    ar: "/المستخدم/الإعدادات/المظهر",
  },
  "/user/settings/notifications": {
    es: "/usuario/ajustes/notificaciones",
    ar: "/المستخدم/الإعدادات/الإشعارات",
  },
  "/user/settings/privacy": {
    es: "/usuario/ajustes/privacidad",
    ar: "/المستخدم/الإعدادات/الخصوصية",
  },
} as const;

export { DEFAULT_LOCALE, LOCALES, PATHNAMES, RTL_LOCALES };
