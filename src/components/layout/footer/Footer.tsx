import { Separator } from '@/components/ui/separator';
import { FacebookIcon, LinkedinIcon, MailIcon, XIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const columns = [
  {
    title: 'Site Links',
    links: [
      {
        text: 'Home',
        url: '/',
      },
      {
        text: 'Bikes',
        url: '/bikes',
      },
      {
        text: 'About Us',
        url: '/about-us',
      },
      {
        text: 'Contact Us',
        url: '/about-us',
      },
    ],
  },
  {
    title: 'Support',
    links: [
      {
        text: 'Help Center',
        url: '#',
      },
      {
        text: 'FAQs',
        url: '#',
      },
      {
        text: 'Terms of Service',
        url: '#',
      },
      {
        text: 'Privacy Policy',
        url: '#',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        text: 'Contact Us',
        url: '/about-us',
      },
      {
        text: 'Partner Program',
        url: '#',
      },
      {
        text: 'Affiliate Program',
        url: '#',
      },
      {
        text: 'API Documentation',
        url: '#',
      },
    ],
  },
];

const socialLinks = [
  {
    icon: <MailIcon size={24} />,
    url: 'mailto:mdsaifullah1302@gmail.com',
  },
  {
    icon: <LinkedinIcon size={24} />,
    url: 'https://linkedin.com/in/saifscripts',
  },
  {
    icon: <FacebookIcon size={24} />,
    url: 'https://facebook.com/saifelhamn',
  },
  {
    icon: <XIcon size={24} />,
    url: 'https://x.com/saifscripts',
  },
];

export default function Footer() {
  return (
    <div className="py-12 bg-slate-900 text-gray-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {columns.map((column, index) => (
            <div className="flex flex-col" key={index}>
              <h3 className="text-white text-lg font-bold mb-2">
                {column.title}
              </h3>
              <Separator className="bg-primary sm:w-1/2 mb-4" />
              <ul className="flex flex-col gap-2">
                {column.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.url}
                      className="hover:text-primary transition-transform duration-300 hover:translate-x-2 inline-block"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col">
            <h3 className="text-white text-lg font-bold mb-2">Social</h3>
            <Separator className="bg-primary sm:w-1/2 mb-4" />
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:text-primary transition-colors duration-300"
                  key={index}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>
                &copy; {new Date().getFullYear()} RideX. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
