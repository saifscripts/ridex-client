import {
  MailCheckIcon,
  MapPinCheckInsideIcon,
  PhoneCallIcon,
} from 'lucide-react';

const contactinfo = [
  {
    icon: <MapPinCheckInsideIcon className="size-8 text-primary" />,
    text: "Cox's Bazar, Bangladesh",
    link: "https://www.google.com/maps/place/Cox's+Bazar/@21.4366366,91.9104591,12z/data=!3m1!4b1!4m6!3m5!1s0x30adc7ea2ab928c3:0x3b539e0a68970810!8m2!3d21.4272184!4d92.0061058!16s%2Fm%2F02vk9mt?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    icon: <PhoneCallIcon className="size-8 text-primary" />,
    text: '+88 01766 637772',
    link: 'tel:+8801766637772',
  },
  {
    icon: <MailCheckIcon className="size-8 text-primary" />,
    text: 'mdsaifullah1302@gmail.com',
    link: 'mailto:mdsaifullah1302@gmail.com',
  },
];

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl w-full mx-auto">
      {contactinfo.map((item) => (
        <a
          href={item.link}
          target="_blank"
          key={item.link}
          className="flex flex-col justify-center items-center gap-4 p-6 rounded-lg hover:bg-white "
        >
          {item.icon}
          <p className="text-gray-600">{item.text}</p>
        </a>
      ))}
    </div>
  );
}
