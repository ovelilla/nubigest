"use client";
// Components
import { AvatarCard } from "./components/avatar/avatar.component";
import { DeleteAccount } from "./components/delete-account/delete-account.component";
import { Email } from "./components/email/email.component";
import { Name } from "./components/name/name.component";
import { Username } from "./components/username/username.component";

const ProfileContainer = () => {
  return (
    <div className="flex w-full flex-col gap-8">
      <AvatarCard />
      <Name />
      <Username />
      <Email />
      <DeleteAccount />
    </div>
  );
};

export { ProfileContainer };
