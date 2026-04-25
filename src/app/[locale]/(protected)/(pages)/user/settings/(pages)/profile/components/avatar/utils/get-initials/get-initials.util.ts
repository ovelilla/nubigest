// Types
import { GetInitials } from "./types/get-initials.util.types";

const getInitials: GetInitials = (name) => {
  if (!name?.trim()) {
    return "U";
  }

  const [firstWord = "", secondWord = ""] = name.trim().split(/\s+/);

  return `${firstWord[0] ?? ""}${secondWord[0] ?? ""}`.toUpperCase();
};

export { getInitials };
