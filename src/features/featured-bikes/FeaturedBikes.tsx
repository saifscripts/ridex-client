import {
  Section,
  SectionDescription,
  SectionTitle,
} from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import useScreenSize from '@/hooks/useScreenSize';
import { useGetBikesQuery } from '@/redux/features/bike/bikeApi';
import { ArrowRightIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BikeCards from './BikeCards';

export default function FeaturedBikes() {
  const screenSize = useScreenSize();
  const [limit, setLimit] = useState('8');

  // set limit based on screen size
  useEffect(() => {
    if (screenSize.width >= 1400) {
      setLimit('8');
    } else if (screenSize.width >= 640) {
      setLimit('6');
    } else {
      setLimit('4');
    }
  }, [screenSize]);

  const { data, isFetching } = useGetBikesQuery([
    ['limit', limit],
    ['isAvailable', true],
  ]);

  return (
    <Section className="container">
      <SectionTitle>Featured Bikes</SectionTitle>

      <SectionDescription>
        Discover our most popular bikes, ready for your next adventure.
      </SectionDescription>

      <BikeCards bikes={data?.data || []} isLoading={isFetching} />

      {/* View All Bikes Button */}
      <div className="mt-8 flex justify-center">
        <Link to="/bikes">
          <Button size="sm" className="flex items-center gap-2">
            <ArrowRightIcon size={16} />
            View All Bikes
          </Button>
        </Link>
      </div>
    </Section>
  );
}
