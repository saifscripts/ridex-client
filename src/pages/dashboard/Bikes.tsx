import { columns } from '@/features/bike-data';
import BikeFilters from '@/features/bike-data/BikeFilters';
import { DataTable } from '@/features/table/';
import { useGetBikesQuery } from '@/redux/features/bike/bikeApi';

export default function Bikes() {
  const { data: bikes, isLoading } = useGetBikesQuery('');

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="container">
      <DataTable
        columns={columns}
        data={bikes}
        filters={(table) => <BikeFilters table={table} />}
      />
    </div>
  );
}
