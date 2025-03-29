"use client";
// Components
import { Button } from "@/components/ui/button";
// Icons
import { LoaderCircle } from "lucide-react";
// Types
import { OAuthButtonsProps } from "./types/oauth-buttons.component.types";

const OAuthButtons = ({ loading, onClick, providers }: OAuthButtonsProps) => (
  <div className="flex w-full flex-col gap-4">
    {providers.map((provider) => (
      <Button
        key={provider.provider}
        className="w-full"
        disabled={loading.status}
        onClick={() => onClick(provider.provider)}
        variant="outline"
      >
        {loading.status && loading.provider === provider.provider ? (
          <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
        ) : (
          <>
            <provider.icon className="mr-2 h-5 w-5" />
            {provider.label}
          </>
        )}
      </Button>
    ))}
  </div>
);

export { OAuthButtons };
