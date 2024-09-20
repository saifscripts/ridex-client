import { BadgeInfoIcon, BikeIcon, HouseIcon } from 'lucide-react';

const navLinks = [
  {
    path: '/',
    text: 'Home',
    icon: <HouseIcon size={20} />,
  },
  {
    path: '/bikes',
    text: 'All Bikes',
    icon: <BikeIcon size={20} />,
  },
  {
    path: '/about-us',
    text: 'About Us',
    icon: <BadgeInfoIcon size={20} />,
  },
];

export default navLinks;
