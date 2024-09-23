import { BikeList } from '@/features/bike';
import { useGetBikesQuery } from '@/redux/features/bike/bikeApi';
import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function ManageBikes() {
  const [searchParams] = useSearchParams();

  // generate params object from searchParams when searchParams updated
  const params = useMemo(() => {
    return [...searchParams];
  }, [searchParams]);

  const { data, isFetching } = useGetBikesQuery(params);

  return (
    <BikeList
      data={data?.data || []}
      meta={data?.meta}
      isLoading={isFetching}
    />
  );
}
