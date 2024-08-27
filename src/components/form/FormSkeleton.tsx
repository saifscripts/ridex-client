import { Skeleton } from '../ui/skeleton';

interface FormSkeletonProps {
  totalInputs: number;
}

export default function FormSkeleton({ totalInputs = 2 }: FormSkeletonProps) {
  return (
    <div className="space-y-4">
      {Array(totalInputs)
        .fill(Math.random())
        .map((item) => (
          <Skeleton key={item} className="h-10 w-full rounded-md" />
        ))}
    </div>
  );
}
