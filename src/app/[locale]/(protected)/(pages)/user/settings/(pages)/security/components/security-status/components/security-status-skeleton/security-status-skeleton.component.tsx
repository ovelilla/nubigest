"use client";
import { Item, ItemContent, ItemGroup, ItemMedia } from "@/components/ui/item";
import { Skeleton } from "@/components/ui/skeleton";

const SecurityStatusSkeleton = () => {
  return (
    <ItemGroup aria-busy="true">
      <Item variant="outline">
        <ItemMedia className="self-start">
          <Skeleton className="size-6 rounded-full" />
        </ItemMedia>
        <ItemContent className="min-w-0">
          <Skeleton className="h-4 w-full max-w-48" />
          <Skeleton className="mt-2 h-4 w-full max-w-72" />
        </ItemContent>
      </Item>
    </ItemGroup>
  );
};

export { SecurityStatusSkeleton };
