"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

const DashboardContainer = () => {
  return (
    <div className="flex gap-4 p-4">
      <Button
        onClick={() =>
          authClient.twoFactor.enable({
            password: "345oV@678",
          })
        }
      >
        Enable 2FA
      </Button>
      <Button
        onClick={() =>
          authClient.twoFactor.disable({
            password: "345oV@678",
          })
        }
      >
        Disable 2FA
      </Button>
    </div>
  );
};

export { DashboardContainer };
