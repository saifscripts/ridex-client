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
      href: '/dashboard/manage-rentals',
      text: 'Manage Rentals',
      icon: <SquareChartGanttIcon size={20} />,
    },
    {
      href: '/dashboard/manage-users',
      text: 'Manage Users',
      icon: <UsersIcon size={20} />,
    },
  ],
};

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) return null;

  return (
    <div
      className={cn(
        'w-[240px] h-screen bg-slate-900 text-white transition-width duration-300 border-r flex-shrink-0',
        {
          'w-0 sm:w-[64px]': !isOpen,
        }
      )}
    >
      <Link
        to="/"
        className="h-[64px] border-b border-slate-700 flex justify-center items-center"
      >
        {isOpen ? (
          <h1 className="text-4xl font-bold font-leckerli text-center">
            <span className="text-primary">RIDE</span>X
          </h1>
        ) : (
          <h1 className="text-4xl font-bold text-center text-primary hidden sm:block font-leckerli">
            R
          </h1>
        )}
      </Link>
      <div
        className={cn('flex flex-col gap-2 my-4 px-4', {
          'px-0 sm:px-3': !isOpen,
        })}
      >
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
