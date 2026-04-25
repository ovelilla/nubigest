const API_PREFIX = "/api";
const AUTH_ROUTES = [
  "/account-deleted",
  "/forgot-password",
  "/reset-password",
  "/signin",
  "/signup",
  "/verify",
];
const DEFAULT_REDIRECT = "/org";
const PROTECTED_ROUTE_PREFIXES = ["/admin", "/org", "/user"];
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
  PROTECTED_ROUTE_PREFIXES,
  PUBLIC_ROUTES,
  TWO_FACTOR_ROUTES,
};
