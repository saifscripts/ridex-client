import { Skeleton } from '@/components/ui/skeleton';

export default function CardSkeleton() {
  return (
    <Skeleton className="bg-gray-300 relative h-80">
      <Skeleton className="h-1/2 m-4 bg-gray-500" />
      <Skeleton className="h-4 w-1/2 mx-4 mb-2 bg-gray-500" />
      <Skeleton className="h-5 mx-4 mb-2 bg-gray-500" />

      <div className="flex gap-2 mx-4 justify-between items-center absolute bottom-6 right-0 left-0">
        <Skeleton className="h-5 w-24 bg-gray-400" />
        <Skeleton className="h-10 w-28 bg-gray-600" />
      </div>
    </Skeleton>
  );
}
