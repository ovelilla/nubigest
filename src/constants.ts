const API_PREFIX = "/api";
const AUTH_ROUTES = [
  "/error",
  "/login",
  "/new-password",
  "/register",
  "/reset",
  "/two-factor",
];
const DEFAULT_LOGIN_REDIRECT = "/dashboard";
const PUBLIC_ROUTES = ["/", "/verification"];
const SUPPORTED_LOCALES = ["en", "es"];

export {
  API_PREFIX,
  AUTH_ROUTES,
  DEFAULT_LOGIN_REDIRECT,
  PUBLIC_ROUTES,
  SUPPORTED_LOCALES,
};
