// Auth
import { authClient } from "@/lib/auth-client";

const listSessions = async () => {
  const { data, error } = await authClient.listSessions();

  if (error) {
    throw new Error("Could not load sessions");
  }

  return data ?? [];
};

export { listSessions };
