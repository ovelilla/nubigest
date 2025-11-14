const API_PREFIX = "/api";
const AUTH_ROUTES = [
  "/auth-error",
  "/forgot-password",
  "/reset-password",
  "/signin",
  "/signup",
  "/verify-email",
];
const DEFAULT_REDIRECT = "/dashboard";
const PROTECTED_ROUTES = ["/dashboard"];
const PUBLIC_ROUTES = ["/"];

export {
  API_PREFIX,
  AUTH_ROUTES,
  DEFAULT_REDIRECT,
  PROTECTED_ROUTES,
  PUBLIC_ROUTES,
};
