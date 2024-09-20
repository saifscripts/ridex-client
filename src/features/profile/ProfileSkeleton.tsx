import { Skeleton } from '@/components/ui/skeleton';

export default function ProfileSkeleton() {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg p-1">
        <div className="h-32 w-full bg-slate-700 rounded-lg relative">
          <Skeleton className="h-8 w-1/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute -bottom-2 left-5">
            <Skeleton className="h-32 w-32 rounded-full" />
          </div>
        </div>
        <div className="p-4">
          <Skeleton className="h-6 w-1/4 mb-2" />
          <div className="flex items-center gap-4">
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-4 w-1/3" />
            <Skeleton className="h-4 w-1/3" />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg p-2">
        <Skeleton className="h-10 w-1/4" />
      </div>
    </div>
  );
}