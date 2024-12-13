import { BadgeInfoIcon, BikeIcon, Contact2Icon, HouseIcon } from 'lucide-react';

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
  {
    path: '/contact-us',
    text: 'Contact Us',
    icon: <Contact2Icon size={20} />,
  },
];

export default navLinks;
