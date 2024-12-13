import { ContactUs as ContactUsSection } from '@/features/contact-us';
import { SmallHero } from '@/features/small-hero';

const ContactUs = () => {
  return (
    <>
      <SmallHero backgroundImage="https://res.cloudinary.com/dz6h5okzp/image/upload/v1734084362/chen-mizrach-1NTOQHBRegA-unsplash_clmeru.jpg" />
      <ContactUsSection />
    </>
  );
};

export default ContactUs;
