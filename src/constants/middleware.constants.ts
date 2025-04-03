const API_PREFIX = "/api";
const AUTH_ROUTES = [
  "/auth-error",
  "/forgot-password",
  "/reset-password",
  "/signin",
  "/signup",
  "/verify-email",
];
const DEFAULT_SIGNIN_REDIRECT = "/dashboard";
const PUBLIC_ROUTES = ["/"];

export { API_PREFIX, AUTH_ROUTES, DEFAULT_SIGNIN_REDIRECT, PUBLIC_ROUTES };
