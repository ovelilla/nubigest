"use server";
// Vendors
import { headers } from "next/headers";
// Auth
import { auth } from "@/lib/auth";

type ViewBackupCodesAction = () => Promise<{
  status: number;
  code: string;
  backupCodes: string[];
}>;

const viewBackupCodesAction: ViewBackupCodesAction = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return { backupCodes: [], code: "UNAUTHORIZED", status: 401 };
  }

  const userId = session.user.id;

  try {
    const data = await auth.api.viewBackupCodes({
      body: {
        userId,
      },
    });

    return {
      status: 200,
      code: "SUCCESS",
      backupCodes: data.backupCodes,
    };
  } catch (error) {
    console.error("Error viewing backup codes:", error);

    return { backupCodes: [], code: "DEFAULT", status: 500 };
  }
};

export { viewBackupCodesAction };
