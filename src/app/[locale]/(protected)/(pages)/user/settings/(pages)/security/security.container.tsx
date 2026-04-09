"use client";
// Components
import { Passkeys } from "./components/passkeys/passkeys.component";
import { SecurityStatus } from "./components/security-status/security-status.component";
import { TwoFactor } from "./components/two-factor/two-factor.container";

const SecurityContainer = () => {
  return (
    <div className="flex w-full flex-col gap-12">
      <SecurityStatus />
      <Passkeys />
      <TwoFactor />
    </div>
  );
};

export { SecurityContainer };
