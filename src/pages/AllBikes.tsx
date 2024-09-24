import { BikeData } from '@/features/bike';
import { useGetBikesQuery } from '@/redux/features/bike/bikeApi';
import {
  clearSelectedBikes,
  setIsComparing,
} from '@/redux/features/comparison/comparisonSlice';
import { useAppDispatch } from '@/redux/hooks';
import { useEffect, useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'sonner';

export default function AllBikes() {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { state } = useLocation();

  useEffect(() => {
    // set isComparing to true on mount (if state?.isComparing is true)
    if (state?.isComparing) {
      dispatch(setIsComparing(true));
      toast.info('Please select 2-4 bikes to compare');
    }

    // clear selectedBikes and isComparing on unmount
    return () => {
      dispatch(clearSelectedBikes());
      dispatch(setIsComparing(false));
    };
  }, [dispatch, state]);

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
