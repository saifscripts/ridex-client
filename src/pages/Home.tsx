import { ContactUs } from '@/features/contact-us';
import { FeaturedBikes } from '@/features/featured-bikes';
import { Hero } from '@/features/hero';
import { Testimonials } from '@/features/testimonials';
import { WhyChooseUs } from '@/features/why-choose-us';

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedBikes />
      <WhyChooseUs />
      <Testimonials />
      <ContactUs />
    </>
  );
};

export default Home;
