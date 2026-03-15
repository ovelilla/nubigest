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

const SecurityContainerSkeleton = () => {
  return (
    <ItemGroup aria-busy="true">
      <Item variant="outline">
        <ItemMedia className="self-start">
          <Skeleton className="size-6 rounded-full" />
        </ItemMedia>
        <ItemContent>
          <Skeleton className="h-4 w-64" />
          <Skeleton className="mt-2 h-4 w-96" />
        </ItemContent>
      </Item>
      <Item className="mt-4 p-0">
        <ItemContent>
          <Skeleton className="h-4 w-64" />
          <Skeleton className="mt-2 h-4 w-96" />
        </ItemContent>
        <ItemActions>
          <Skeleton className="h-5 w-9 rounded-full" />
        </ItemActions>
      </Item>
      <ItemSeparator />
      <Item className="p-0">
        <ItemMedia className="self-start" variant="icon">
          <Skeleton className="size-5 rounded-sm" />
        </ItemMedia>
        <ItemContent>
          <Skeleton className="h-4 w-64" />
          <Skeleton className="mt-2 h-4 w-96" />
        </ItemContent>
        <ItemActions>
          <Skeleton className="size-5 rounded-sm" />
        </ItemActions>
      </Item>
      <ItemSeparator />
      <Item className="p-0">
        <ItemMedia className="self-start" variant="icon">
          <Skeleton className="size-5 rounded-sm" />
        </ItemMedia>
        <ItemContent>
          <Skeleton className="h-4 w-64" />
          <Skeleton className="mt-2 h-4 w-96" />
        </ItemContent>
        <ItemActions>
          <Skeleton className="h-9 w-24 rounded-md" />
        </ItemActions>
      </Item>
      <ItemSeparator />
      <Item className="p-0">
        <ItemMedia className="self-start" variant="icon">
          <Skeleton className="size-5 rounded-sm" />
        </ItemMedia>
        <ItemContent>
          <Skeleton className="h-4 w-64" />
          <Skeleton className="mt-2 h-4 w-96" />
        </ItemContent>
        <ItemActions>
          <Skeleton className="h-9 w-24 rounded-md" />
          <Skeleton className="h-9 w-24 rounded-md" />
        </ItemActions>
      </Item>
    </ItemGroup>
  );
};

export { SecurityContainerSkeleton };
