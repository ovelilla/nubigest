const API_PREFIX = "/api";
const AUTH_ROUTES = [
  "/error",
  "/signin",
  "/new-password",
  "/signup",
  "/reset",
  "/two-factor",
];
const DEFAULT_SIGNIN_REDIRECT = "/dashboard";
const PUBLIC_ROUTES = ["/", "/verification"];

export { API_PREFIX, AUTH_ROUTES, DEFAULT_SIGNIN_REDIRECT, PUBLIC_ROUTES };
