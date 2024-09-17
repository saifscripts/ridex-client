import {
  BadgeInfoIcon,
  BikeIcon,
  HouseIcon,
  LayoutDashboardIcon,
} from 'lucide-react';

const navLinks = [
  {
    path: '/',
    text: 'Home',
    icon: <HouseIcon size={20} />,
  },
  {
    path: '/bikes',
    text: 'Bikes',
    icon: <BikeIcon size={20} />,
  },
  {
    path: '/about-us',
    text: 'About Us',
    icon: <BadgeInfoIcon size={20} />,
  },
  {
    path: '/dashboard',
    text: 'Dashboard',
    icon: <LayoutDashboardIcon size={20} />,
  },
];

export default navLinks;
