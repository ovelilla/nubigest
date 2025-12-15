// Vendors
import { Link } from "@/i18n/navigation";
// Components
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Spinner } from "@/components/ui/spinner";
// Hooks
import { UserNavHook } from "./hooks/user-nav.hook";
// Icons
import { Users, LogOut, Settings } from "lucide-react";
// Types
import type { UserNavProps } from "./types/user-nav.component.types";

const UserNav = ({ session }: UserNavProps) => {
  const { handleSignOut, isSigningOut, t } = UserNavHook();

  const email = session.user.email;
  const name = session.user.name;
  const fallback = name?.charAt(0).toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button variant="ghost" size="icon" className="relative">
            <Avatar>
              <AvatarFallback className="text-base">{fallback}</AvatarFallback>
            </Avatar>
          </Button>
        }
      />
      <DropdownMenuContent className="w-56" align="end">
        <DropdownMenuGroup>
          <DropdownMenuLabel className="p-0 font-normal">
            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarFallback className="rounded-lg">
                  {fallback}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{name}</span>
                <span className="text-muted-foreground truncate text-xs">
                  {email}
                </span>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem
            render={
              <Link
                className="cursor-pointer"
                href="/dashboard"
                prefetch={false}
              >
                <Settings />
                {t("dropdown.items.settings")}
              </Link>
            }
          />
          <DropdownMenuItem
            render={
              <Link
                className="cursor-pointer"
                href="/dashboard"
                prefetch={false}
              >
                <Users />
                {t("dropdown.items.users")}
              </Link>
            }
          />
          <DropdownMenuSeparator />
          <DropdownMenuItem
            closeOnClick={false}
            disabled={isSigningOut}
            onClick={() => handleSignOut()}
          >
            {isSigningOut ? <Spinner /> : <LogOut />}
            {isSigningOut
              ? t("dropdown.items.signingOut")
              : t("dropdown.items.signOut")}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { UserNav };
