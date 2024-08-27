import { Skeleton } from '../ui/skeleton';

interface FormSkeletonProps {
  numberOfInputs: number;
}

export default function FormSkeleton({
  numberOfInputs = 2,
}: FormSkeletonProps) {
  return (
    <div className="space-y-4">
      {Array(numberOfInputs)
        .fill(Math.random())
        .map((item) => (
          <Skeleton key={item} className="h-10 w-full rounded-md" />
        ))}
    </div>
  );
}
