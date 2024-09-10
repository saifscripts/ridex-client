import { columns } from '@/features/bike-data';
import BikeFilters from '@/features/bike-data/BikeFilters';
import BikeSearch from '@/features/bike-data/BikeSearch';
import { DataTable } from '@/features/table/';
import { DataTablePagination } from '@/features/table/DataTablePagination';
import { useGetBikesQuery } from '@/redux/features/bike/bikeApi';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Bikes() {
  const [searchParams] = useSearchParams();

  // Convert searchParams to an object to use as dependencies
  const params = useMemo(() => {
    return [...searchParams];
  }, [searchParams]);

  const { data: bikes, isFetching } = useGetBikesQuery(params);

  return (
    <div className="space-y-4 container my-4">
      <DataTable
        columns={columns}
        data={bikes?.data || []}
        search={<BikeSearch />}
        viewOptions
        filters={<BikeFilters />}
        isLoading={isFetching}
      />
      <DataTablePagination metaData={bikes?.meta} />
    </div>
  );
}
