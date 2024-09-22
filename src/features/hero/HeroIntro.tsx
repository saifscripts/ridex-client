import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/redux/hooks';
import { ListPlus, ListTreeIcon, UserPlusIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroIntro() {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div
      className="text-white flex flex-col justify-center gap-8 text-center md:text-left flex-1 h-[calc(100svh-64px)] pt-20 md:pt-0"
      data-aos="fade-right"
    >
      <h1 className="text-7xl font-semibold">Ride Your Way</h1>
      <p>
        Explore our wide range of bikes, from city cruisers to mountain
        thrillers. Book in seconds, ride in minutes. Whether it's for a quick
        commute or an adventurous day out, we’ve got you covered. Start your
        journey with us today!
      </p>
      <div className="flex items-center xs:justify-center md:justify-start gap-4 flex-col xs:flex-row">
        <Link to="/bikes" className="w-[70%] xs:w-auto">
          <Button size="lg" className="w-full flex items-center gap-2">
            <ListPlus size={16} />
            Rent a Bike Now
          </Button>
        </Link>
        {user ? (
          <Link to="/dashboard/my-rentals" className="w-[70%] xs:w-auto">
            <Button
              variant="secondary"
              size="lg"
              className="w-full flex items-center gap-2"
            >
              <ListTreeIcon size={16} />
              My Rentals
            </Button>
          </Link>
        ) : (
          <Link to="/signup" className="w-[70%] xs:w-auto">
            <Button
              variant="secondary"
              size="lg"
              className="w-full flex items-center gap-2"
            >
              <UserPlusIcon size={16} />
              Sign Up for Free
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
