import {
  BikeIcon,
  LayoutDashboardIcon,
  SquareChartGanttIcon,
  UserPenIcon,
  UsersIcon,
} from 'lucide-react';

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
      icon: <LayoutDashboardIcon size={20} />,
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

export default sidebarLinks;
