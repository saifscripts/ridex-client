import { Coupon } from '@/features/coupon';
import { FeaturedBikes } from '@/features/featured-bikes';
import { Hero } from '@/features/hero';
import NewsLetter from '@/features/newsletter';
import { Testimonials } from '@/features/testimonials';
import { WhyChooseUs } from '@/features/why-choose-us';
const Home = () => {
  return (
    <>
      <Hero />
      <Coupon />
      <FeaturedBikes />
      <WhyChooseUs />
      <Testimonials />
      <NewsLetter />
    </>
  );
};

export default Home;
