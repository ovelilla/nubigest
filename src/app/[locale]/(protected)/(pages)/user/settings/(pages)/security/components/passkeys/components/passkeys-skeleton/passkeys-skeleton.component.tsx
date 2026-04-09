"use client";
// Components
import {
  Item,
  ItemActions,
  ItemContent,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
} from "@/components/ui/item";
import { Skeleton } from "@/components/ui/skeleton";

const PasskeysSkeleton = () => {
  return (
    <ItemGroup aria-busy="true">
      <Item className="p-0">
        <ItemContent className="min-w-0">
          <Skeleton className="h-4 w-full max-w-48" />
          <Skeleton className="mt-2 h-4 w-full max-w-72" />
        </ItemContent>
        <ItemActions className="shrink-0">
          <Skeleton className="h-9 w-20 rounded-md sm:w-24" />
        </ItemActions>
      </Item>
      <ItemSeparator />
      <div className="flex flex-col gap-8">
        {Array.from({ length: 1 }).map((_, index) => (
          <Item className="p-0" key={index}>
            <ItemMedia className="self-start" variant="icon">
              <Skeleton className="size-5 rounded-sm" />
            </ItemMedia>
            <ItemContent className="min-w-0">
              <Skeleton className="h-4 w-full max-w-48" />
              <Skeleton className="mt-2 h-4 w-full max-w-72" />
            </ItemContent>
            <ItemActions className="flex shrink-0 gap-2">
              <Skeleton className="h-9 w-20 rounded-md" />
              <Skeleton className="h-9 w-20 rounded-md" />
            </ItemActions>
          </Item>
        ))}
      </div>
    </ItemGroup>
  );
};

export { PasskeysSkeleton };
