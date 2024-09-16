import useScreenSize from '@/hooks/useScreenSize';
import { useGetBikesQuery } from '@/redux/features/bike/bikeApi';
import { useMemo } from 'react';
import FeaturedBikeList from './FeaturedBikeLists';

export default function FeaturedBikes() {
  const screenSize = useScreenSize();

  // Convert searchParams to an object when searchParams updated
  const params = useMemo(() => {
    let limit = '8';

    if (screenSize.width < 640) {
      limit = '4';
    } else if (screenSize.width < 1400) {
      limit = '6';
    }

    return [
      ['limit', limit],
      ['isAvailable', true],
    ];
  }, [screenSize]);

  const { data, isFetching } = useGetBikesQuery(params);

  return <FeaturedBikeList data={data?.data || []} isLoading={isFetching} />;
}
