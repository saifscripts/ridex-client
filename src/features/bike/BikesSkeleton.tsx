import CardSkeleton from './CardSkeleton';

export default function BikesSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 my-6">
      {[...Array(12)].map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
}
