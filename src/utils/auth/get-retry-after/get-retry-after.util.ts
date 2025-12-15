type GetRetryAfter = (headers: Headers) => number | null;

const getRetryAfter: GetRetryAfter = (headers) => {
  const value = headers.get("X-Retry-After");
  const seconds = Number(value);

  return seconds > 0 && Number.isFinite(seconds) ? seconds : null;
};

export { getRetryAfter };
