"use client";
import { useState } from "react";
import QRCode from "react-qr-code";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";

const DashboardContainer = () => {
  const [code, setCode] = useState("");
  const [qr, setQr] = useState<string | null>(null);
  const [step, setStep] = useState<"idle" | "qr" | "verify">("idle");

  return (
    <div className="flex flex-col gap-8 p-4">
      <div className="flex gap-4">
        <Button
          onClick={() =>
            authClient.twoFactor.enable({
              password: "345Test@678",
            })
          }
        >
          Enable 2FA
        </Button>
        <Button
          onClick={() =>
            authClient.twoFactor.disable({
              password: "345Test@678",
            })
          }
        >
          Disable 2FA
        </Button>
      </div>

      <div className="flex gap-4">
        {step === "idle" && (
          <>
            <Button
              onClick={async () => {
                const res = await authClient.twoFactor.getTotpUri({
                  password: "345Test@678",
                });

                console.log(res);

                if (res.error) {
                  console.error(res.error);
                  return;
                }

                setQr(res.data.totpURI);
                setStep("qr");
              }}
            >
              Enable TOTP
            </Button>
            <Button
              variant="destructive"
              onClick={async () => {
                const res = await authClient.twoFactor.disable({
                  password: "345Test@678",
                });

                console.log(res);

                if (res.error) {
                  console.error(res.error);
                  return;
                }

                alert("TOTP desactivado");
                setStep("idle");
                setQr(null);
                setCode("");
              }}
            >
              Disable TOTP
            </Button>
          </>
        )}

        {step === "qr" && qr && (
          <div className="flex flex-col gap-14">
            <p>Escanea este código QR con tu app de autenticación:</p>
            <div className="mx-auto w-full max-w-lg">
              <div className="bg-white p-4">
                <QRCode
                  value={qr}
                  size={512}
                  style={{ width: "100%", height: "auto" }}
                  viewBox="0 0 512 512"
                />
              </div>
            </div>
            <Button onClick={() => setStep("verify")}>
              Ya he escaneado, continuar
            </Button>
          </div>
        )}

        {step === "verify" && (
          <div className="flex flex-col gap-4">
            <p>Introduce el código de 6 dígitos generado por tu app:</p>
            <input
              className="rounded border p-2"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              maxLength={6}
            />
            <Button
              onClick={async () => {
                const res = await authClient.twoFactor.verifyTotp({
                  code,
                  trustDevice: true,
                });

                console.log(res);

                if (res.error) {
                  console.error(res.error);
                  return;
                }

                alert("TOTP activado correctamente");
                setStep("idle");
                setQr(null);
                setCode("");
              }}
            >
              Verificar y activar
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export { DashboardContainer };
