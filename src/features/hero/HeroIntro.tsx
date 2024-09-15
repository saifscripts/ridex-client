import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/redux/hooks';
import { Link } from 'react-router-dom';

export default function HeroIntro() {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className="text-white flex flex-col justify-center gap-8 text-center md:text-left py-6">
      <h1 className="text-7xl font-bold">Ride Your Way</h1>
      <p>
        Explore our wide range of bikes, from city cruisers to mountain
        thrillers. Book in seconds, ride in minutes. Whether it's for a quick
        commute or an adventurous day out, we’ve got you covered. Start your
        journey with us today!
      </p>
      <div className="flex items-center xs:justify-center md:justify-start gap-4 flex-col xs:flex-row">
        <Link to="/bikes" className="w-[70%] xs:w-auto">
          <Button size="lg" className="w-full">
            Rent a Ride Now
          </Button>
        </Link>
        {user ? (
          <Link to="/dashboard/my-rentals" className="w-[70%] xs:w-auto">
            <Button variant="secondary" size="lg" className="w-full">
              My Rentals
            </Button>
          </Link>
        ) : (
          <Link to="/signup" className="w-[70%] xs:w-auto">
            <Button variant="secondary" size="lg" className="w-full">
              Sign Up for Free
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
