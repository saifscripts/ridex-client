import { ContactUs } from '@/features/contact-us';
import { Milestones } from '@/features/milestones';
import { Mission } from '@/features/mission';
import { SmallHero } from '@/features/small-hero';
import { Team } from '@/features/team';

const AboutUs = () => {
  return (
    <>
      <SmallHero backgroundImage="https://res.cloudinary.com/dz6h5okzp/image/upload/v1734084390/about-hero_ukxhax.jpg" />
      <Mission />
      <Team />
      <Milestones />
      <ContactUs />
    </>
  );
};

export default AboutUs;
