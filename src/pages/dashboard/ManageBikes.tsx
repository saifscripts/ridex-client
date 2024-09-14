import BikeData from '@/features/bike-data/BikeData';
import { useGetBikesQuery } from '@/redux/features/bike/bikeApi';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function ManageBikes() {
  const [searchParams] = useSearchParams();

  // Convert searchParams to an object when searchParams updated
  const params = useMemo(() => {
    return [...searchParams];
  }, [searchParams]);

  const { data, isFetching } = useGetBikesQuery(params);

  return (
    <BikeData
      data={data?.data || []}
      meta={data?.meta}
      isLoading={isFetching}
    />
  );
}
