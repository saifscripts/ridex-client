import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { useAppSelector } from '@/redux/hooks';
import {
  BikeIcon,
  ListTreeIcon,
  SquareChartGanttIcon,
  UserPenIcon,
  UsersIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SidebarItem from './SidebarItem';

const sidebarLinks = {
  USER: [
    {
      href: '/dashboard',
      text: 'Profile',
      icon: <UserPenIcon size={20} />,
    },
    {
      href: '/dashboard/bikes',
      text: 'Bikes',
      icon: <BikeIcon size={20} />,
    },
    {
      href: '/dashboard/my-rentals',
      text: 'My Rentals',
      icon: <ListTreeIcon size={20} />,
    },
  ],
  ADMIN: [
    {
      href: '/dashboard',
      text: 'Profile',
      icon: <UserPenIcon size={20} />,
    },
    {
      href: '/dashboard/manage-bikes',
      text: 'Manage Bikes',
      icon: <BikeIcon size={20} />,
    },
    {
      href: '/dashboard/manage-users',
      text: 'Manage Users',
      icon: <UsersIcon size={20} />,
    },
    {
      href: '/dashboard/manage-rentals',
      text: 'Manage Rentals',
      icon: <SquareChartGanttIcon size={20} />,
    },
  ],
};

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) return null;

  return (
    <div
      className={cn(
        'w-[256px] bg-white transition-width duration-300 border-r flex-shrink-0 p-4',
        {
          'w-0 px-0': !isOpen,
        }
      )}
    >
      <Link to="/">
        <h1 className="text-4xl font-bold font-bebas text-center">
          <span className="text-primary">BIKE</span>LAGBE
        </h1>
      </Link>
      <Separator className="my-4 w-full" />
      <div className="flex flex-col gap-2">
        {sidebarLinks[user?.role].map((item) => (
          <SidebarItem
            key={item.href}
            href={item.href}
            isOpen={isOpen}
            icon={item.icon}
          >
            {item.text}
          </SidebarItem>
        ))}
      </div>
    </div>
  );
}
