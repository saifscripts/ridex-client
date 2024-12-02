import { IBike } from '@/interfaces';
import { Table } from '@tanstack/react-table';
import { BikeCard } from './BikeCard';
import BikesSkeleton from './BikesSkeleton';

export default function BikeCards({
  table,
  isLoading,
}: {
  table: Table<IBike>;
  isLoading: boolean;
}) {
  if (isLoading) return <BikesSkeleton />;

  return table.getRowModel().rows?.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {table.getRowModel().rows.map(({ original: bike }) => (
        <BikeCard key={bike._id} bike={bike} />
      ))}
    </div>
  ) : (
    <p className="text-center text-2xl my-8">No Bikes Found</p>
  );
}
