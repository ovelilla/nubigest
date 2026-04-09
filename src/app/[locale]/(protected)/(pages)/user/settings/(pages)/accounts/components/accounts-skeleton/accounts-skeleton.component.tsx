"use client";
// Vendors
import React from "react";
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

const AccountsSkeleton = () => {
  return (
    <ItemGroup aria-busy="true">
      <Item className="mt-4 p-0">
        <ItemContent className="min-w-0">
          <Skeleton className="h-4 w-full max-w-48" />
          <Skeleton className="mt-2 h-4 w-full max-w-72" />
        </ItemContent>

        <ItemActions className="flex shrink-0 gap-2">
          <Skeleton className="h-9 w-20 rounded-md sm:w-24" />
        </ItemActions>
      </Item>

      <ItemSeparator />

      {Array.from({ length: 3 }).map((_, index) => (
        <React.Fragment key={index}>
          <Item className="p-0">
            <ItemMedia className="self-start" variant="icon">
              <Skeleton className="size-5 rounded-sm" />
            </ItemMedia>

            <ItemContent className="min-w-0">
              <Skeleton className="h-4 w-full max-w-48" />
              <Skeleton className="mt-2 h-4 w-full max-w-72" />
            </ItemContent>

            <ItemActions className="shrink-0">
              <Skeleton className="h-9 w-20 rounded-md sm:w-24" />
            </ItemActions>
          </Item>

          <ItemSeparator />
        </React.Fragment>
      ))}
    </ItemGroup>
  );
};

export { AccountsSkeleton };
