"use client";
// Vendors
import { useEffect } from "react";
// Constants
import { BROADCAST_CHANNEL_NAME } from "@/constants/broadcast-channels.constants";
// i18n
import { useRouter } from "@/i18n/navigation";
// Components
import { PageLoader } from "@/components/page-loader/page-loader.component";

const AccountDeletedPage = () => {
  const router = useRouter();

  useEffect(() => {
    const channel = new BroadcastChannel(BROADCAST_CHANNEL_NAME);
    channel.postMessage({ type: "account-deleted" });
    channel.close();
    router.replace("/signin");
  }, [router]);

  return <PageLoader />;
};

export default AccountDeletedPage;
