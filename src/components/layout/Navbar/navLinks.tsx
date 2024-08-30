import { DashboardIcon, HomeIcon, RowsIcon } from '@radix-ui/react-icons';

const navLinks = [
  {
    path: '/',
    text: 'Home',
    icon: <HomeIcon />,
  },
  {
    path: '/bikes',
    text: 'Bikes',
    icon: <HomeIcon />,
  },
  {
    path: '/about-us',
    text: 'About Us',
    icon: <RowsIcon />,
  },
  {
    path: '/dashboard',
    text: 'Dashboard',
    icon: <DashboardIcon />,
  },
];

export default navLinks;
