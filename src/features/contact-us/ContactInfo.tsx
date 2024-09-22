import useScreenSize from '@/hooks/useScreenSize';
import {
  MailCheckIcon,
  MapPinCheckInsideIcon,
  PhoneCallIcon,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const contactInfo = [
  {
    icon: <MapPinCheckInsideIcon size={32} className="text-primary" />,
    text: 'GEC, Chattogram, Bangladesh',
    link: 'https://www.google.com/maps/search/gec+chittagong/@22.3585134,91.8191721,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkxNi4wIKXMDSoASAFQAw%3D%3D',
  },
  {
    icon: <PhoneCallIcon size={32} className="text-primary" />,
    text: '+88 01766 637772',
    link: 'tel:+8801766637772',
  },
  {
    icon: <MailCheckIcon size={32} className="text-primary" />,
    text: 'mdsaifullah1302@gmail.com',
    link: 'mailto:mdsaifullah1302@gmail.com',
  },
];

export default function ContactInfo() {
  const [cardsInARow, setCardsInARow] = useState(1);
  const screenSize = useScreenSize();

  useEffect(() => {
    if (screenSize.width >= 768) {
      setCardsInARow(3);
    } else {
      setCardsInARow(1);
    }
  }, [screenSize.width]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 w-full mx-auto">
      {contactInfo.map((item, index) => (
        <a
          href={item.link}
          target="_blank"
          key={item.link}
          className="flex flex-col justify-center items-center gap-4 p-6 rounded-lg transition-all duration-300 hover:bg-primary/5 text-gray-800"
          data-aos="zoom-in"
          data-aos-delay={(index % cardsInARow) * 100}
        >
          {item.icon}
          <p>{item.text}</p>
        </a>
      ))}
    </div>
  );
}
