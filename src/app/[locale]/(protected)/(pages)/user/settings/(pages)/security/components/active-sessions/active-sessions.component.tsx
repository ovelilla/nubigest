"use client";
// Vendors
import { useEffect, useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { UAParser } from "ua-parser-js";
// Auth
import { authClient } from "@/lib/auth-client";
// Components
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";

export type Session = (typeof authClient.$Infer.Session)["session"];

export function SessionsPanel() {
  const [sessions, setSessions] = useState<Session[]>([]);
  const [loading, setLoading] = useState(false);
  const [revokingToken, setRevokingToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const { data: currentSession } = authClient.useSession();

  const fetchSessions = async () => {
    setError(null);
    setLoading(true);
    try {
      const { data, error } = await authClient.listSessions();
      if (error) {
        setError("Could not load sessions.");
        setSessions([]);
        return;
      }
      setSessions(data ?? []);
    } catch (err) {
      console.error("Error listing sessions:", err);
      setError("Could not load sessions.");
      setSessions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  const handleRevoke = async (token: string) => {
    const isCurrentSession = token === currentSession?.session.token;

    if (isCurrentSession) {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.replace("/signin");
          },
        },
      });
      return;
    }

    const previous = [...sessions];

    setError(null);
    setRevokingToken(token);
    setSessions((prev) => prev.filter((s) => s.token !== token));

    try {
      const { error: revokeSessionError } = await authClient.revokeSession({
        token,
      });

      if (revokeSessionError) {
        setSessions(previous);
        setError("Could not revoke session.");
        return;
      }

      const { data: listSessionsData, error: listSessionsError } =
        await authClient.listSessions();

      if (listSessionsError) {
        setSessions(previous);
        setError("Session revoked, but failed to refresh the list.");
        return;
      }

      setSessions(listSessionsData ?? []);

      //   if (token === currentSession?.session.token) {
      //     await authClient.signOut();
      //     router.push("/signin");
      //   }
    } catch (err) {
      console.error("Error revoking session:", err);
      setSessions(previous);
      setError("Could not revoke session.");
    } finally {
      setRevokingToken(null);
    }
  };

  if (loading) {
    return <div>Loading sessions...</div>;
  }

  return (
    <ItemGroup>
      <Item className="p-0">
        <ItemContent>
          <ItemTitle>Active Sessions</ItemTitle>
          <ItemDescription>
            Manage your active sessions. You can view details about each session
            and revoke access if needed.
          </ItemDescription>
        </ItemContent>
      </Item>
      <ItemSeparator />

      {error ? (
        <Item>
          <ItemContent>
            <ItemDescription>{error}</ItemDescription>
          </ItemContent>
        </Item>
      ) : null}

      {sessions.map((session) => {
        const result = UAParser(session.userAgent ?? "");
        const isCurrent = session.token === currentSession?.session.token;
        return (
          <Item className="p-0" key={session.id}>
            <ItemContent>
              <ItemTitle>
                {result.browser.name ?? "Unknown browser"} on{" "}
                {result.os.name ?? "Unknown OS"}
                {isCurrent ? " (Current session)" : ""}
              </ItemTitle>
              <ItemDescription>
                {result.browser.version ?? "Unknown version"} -{" "}
                {result.os.version ?? "Unknown version"}
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button
                onClick={() => handleRevoke(session.token)}
                variant="outline"
                disabled={revokingToken === session.token}
              >
                {revokingToken === session.token ? "Revoking..." : "Revoke"}
              </Button>
            </ItemActions>
          </Item>
        );
      })}
    </ItemGroup>
  );
}
