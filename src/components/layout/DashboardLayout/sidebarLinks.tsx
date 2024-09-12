import { DashboardIcon } from '@radix-ui/react-icons';

const sidebarLinks = {
  USER: [
    {
      href: '/dashboard',
      text: 'Profile',
      icon: <DashboardIcon />,
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
      icon: <DashboardIcon />,
    },
    {
      href: '/dashboard/manage-bikes',
      text: 'Manage Bikes',
      icon: <DashboardIcon />,
    },
    {
      href: '/dashboard/manage-users',
      text: 'Manage Users',
      icon: <DashboardIcon />,
    },
    {
      href: '/dashboard/manage-rentals',
      text: 'Manage Rentals',
      icon: <DashboardIcon />,
    },
  ],
};

export default sidebarLinks;
