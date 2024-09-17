import { AboutHero } from '@/features/about-hero';
import { ContactUs } from '@/features/contact-us';
import { Milestones } from '@/features/milestones';
import { Mission } from '@/features/mission';
import { Team } from '@/features/team';

const AboutUs = () => {
  return (
    <>
      <AboutHero />
      <Mission />
      <Team />
      <Milestones />
      <ContactUs />
    </>
  );
};

export default AboutUs;
