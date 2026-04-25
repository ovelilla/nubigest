"use client";
// Components
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const EmailSkeleton = () => {
  return (
    <Card className="pb-0">
      <CardHeader>
        <Skeleton className="h-6 w-full max-w-48" />
        <Skeleton className="h-5 w-full max-w-80" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-9 w-full max-w-96" />
      </CardContent>
      <CardFooter className="justify-end border-t px-6 pb-4 [.border-t]:pt-4">
        <Skeleton className="h-9 w-20" />
      </CardFooter>
    </Card>
  );
};

export { EmailSkeleton };
