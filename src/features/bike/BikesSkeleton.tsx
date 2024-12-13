import { Skeleton } from '@/components/ui/skeleton';

export default function BikesSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-4">
      {[...Array(12)].map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
}

function CardSkeleton() {
  return (
    <Skeleton className="bg-foreground/30 relative h-80">
      <Skeleton className="h-1/2 m-4 bg-foreground/50" />
      <Skeleton className="h-4 w-1/2 mx-4 mb-2 bg-foreground/50" />
      <Skeleton className="h-5 mx-4 mb-2 bg-foreground/50" />

      <div className="flex gap-2 mx-4 justify-between items-center absolute bottom-6 right-0 left-0">
        <Skeleton className="h-5 w-24 bg-foreground/40" />
        <Skeleton className="h-10 w-28 bg-foreground/60" />
      </div>
    </Skeleton>
  );
}
