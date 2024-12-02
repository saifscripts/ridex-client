import { IBike } from '@/interfaces';

import { BikeCard, BikesSkeleton } from '@/features/bike';

interface BikeCardsProps {
  bikes: IBike[];
  isLoading: boolean;
}

export default function BikeCards({ bikes, isLoading }: BikeCardsProps) {
  if (isLoading) return <BikesSkeleton />;

  return bikes.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-4">
      {bikes.map((bike) => (
        <BikeCard key={bike._id} bike={bike} />
      ))}
    </div>
  ) : (
    <p className="text-center text-2xl my-8">No Bikes Found</p>
  );
}
