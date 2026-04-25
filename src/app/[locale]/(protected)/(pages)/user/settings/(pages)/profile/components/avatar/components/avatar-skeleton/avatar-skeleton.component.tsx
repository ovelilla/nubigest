"use client";
// Components
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const AvatarSkeleton = () => {
  return (
    <Card className="pb-0">
      <CardHeader className="flex flex-row items-start justify-between gap-6">
        <div className="min-w-0 flex-1 space-y-2">
          <Skeleton className="h-7 w-full max-w-32" />
          <Skeleton className="h-5 w-full max-w-md" />
        </div>

        <Skeleton className="size-20 rounded-full" />
      </CardHeader>

      <CardFooter className="border-t px-6 pb-4 [.border-t]:pt-4">
        <Skeleton className="h-5 w-full max-w-sm" />
      </CardFooter>
    </Card>
  );
};

export { AvatarSkeleton };
