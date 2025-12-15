const API_PREFIX = "/api";
const AUTH_ROUTES = [
  "/forgot-password",
  "/reset-password",
  "/signin",
  "/signup",
  "/verify",
];
const DEFAULT_REDIRECT = "/dashboard";
const PROTECTED_ROUTES = ["/dashboard"];
const PUBLIC_ROUTES = ["/"];
const TWO_FACTOR_ROUTES = [
  "/two-factor",
  "/two-factor/authenticator",
  "/two-factor/backup",
  "/two-factor/email",
];

export {
  API_PREFIX,
  AUTH_ROUTES,
  DEFAULT_REDIRECT,
  PROTECTED_ROUTES,
  PUBLIC_ROUTES,
  TWO_FACTOR_ROUTES,
};
