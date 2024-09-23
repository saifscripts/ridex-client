import { BikeData } from '@/features/bike';
import { useGetBikesQuery } from '@/redux/features/bike/bikeApi';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function AllBikes() {
  const [searchParams] = useSearchParams();

  // generate params object from searchParams when searchParams updated
  const params = useMemo(() => {
    const updatedParams = [...searchParams];
    const hasLimit = updatedParams.some(([key]) => key === 'limit');
    return hasLimit ? updatedParams : [...updatedParams, ['limit', '12']];
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
