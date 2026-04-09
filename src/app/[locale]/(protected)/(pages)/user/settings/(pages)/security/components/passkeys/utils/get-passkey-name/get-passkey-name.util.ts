// Vendors
import { UAParser } from "ua-parser-js";

const getPasskeyName = () => {
  const { browser, os } = UAParser();

  const osName = os.name ?? "Unknown OS";
  const browserName = browser.name ?? "";

  return browserName ? `${osName} · ${browserName}` : osName;
};

export { getPasskeyName };
