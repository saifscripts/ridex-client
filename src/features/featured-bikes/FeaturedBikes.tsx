import {
  Section,
  SectionDescription,
  SectionTitle,
} from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import useScreenSize from '@/hooks/useScreenSize';
import { useGetBikesQuery } from '@/redux/features/bike/bikeApi';
import { ArrowRightIcon } from 'lucide-react';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import BikeCards from './BikeCards';

export default function FeaturedBikes() {
  const screenSize = useScreenSize();

  // generate params based on screen size
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

  return (
    <Section className="container">
      <SectionTitle>Featured Bikes</SectionTitle>
      <SectionDescription>
        Discover our most popular bikes, ready for your next adventure.
      </SectionDescription>
      <BikeCards data={data?.data || []} isLoading={isFetching} />
      <div className="mt-8 flex justify-center">
        <ViewAllBikesButton />
      </div>
    </Section>
  );
}

function ViewAllBikesButton() {
  return (
    <Link to="/bikes">
      <Button size="sm" className="flex items-center gap-2">
        <ArrowRightIcon size={16} />
        View All Bikes
      </Button>
    </Link>
  );
}
