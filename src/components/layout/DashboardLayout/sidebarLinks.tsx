import { DashboardIcon } from '@radix-ui/react-icons';
import { BikeIcon, LogsIcon, UserPenIcon, UsersIcon } from 'lucide-react';

const sidebarLinks = {
  USER: [
    {
      href: '/dashboard',
      text: 'Profile',
      icon: <UserPenIcon className="size-5" />,
    },
    {
      href: '/dashboard/bikes',
      text: 'Bikes',
      icon: <DashboardIcon />,
    },
    {
      href: '/dashboard/my-rentals',
      text: 'My Rentals',
      icon: <DashboardIcon />,
    },
  ],
  ADMIN: [
    {
      href: '/dashboard',
      text: 'Profile',
      icon: <UserPenIcon className="size-5" />,
    },
    {
      href: '/dashboard/manage-bikes',
      text: 'Manage Bikes',
      icon: <BikeIcon className="size-5" />,
    },
    {
      href: '/dashboard/manage-users',
      text: 'Manage Users',
      icon: <UsersIcon className="size-5" />,
    },
    {
      href: '/dashboard/manage-rentals',
      text: 'Manage Rentals',
      icon: <LogsIcon className="size-5" />,
    },
  ],
};

export default sidebarLinks;
