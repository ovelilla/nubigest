"use client";
// Components
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const DeleteAccountSkeleton = () => {
  return (
    <Card className="ring-destructive/20 pb-0">
      <CardHeader>
        <Skeleton className="h-6 w-full max-w-48" />
        <Skeleton className="h-5 w-full max-w-96" />
      </CardHeader>
      <CardFooter className="border-destructive/20 justify-end border-t px-6 pb-4 [.border-t]:pt-4">
        <Skeleton className="h-9 w-48" />
      </CardFooter>
    </Card>
  );
};

export { DeleteAccountSkeleton };
