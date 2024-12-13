import bike_ride from '@/assets/illustrations/bike_ride_7xit.svg';
import online_friends from '@/assets/illustrations/online_friends_re_eqaj.svg';
import online_payments from '@/assets/illustrations/online_payments_re_y8f2.svg';
import booking from '@/assets/illustrations/undraw_booking_re_gw4j.svg';
import Container from '@/components/layout/Container';
import {
  Section,
  SectionDescription,
  SectionTitle,
} from '@/components/layout/Section';
import useScreenSize from '@/hooks/useScreenSize';
import { useEffect, useState } from 'react';

const features = [
  {
    id: 1,
    title: 'Premium Bikes',
    description:
      'A wide range of premium bikes are ready for all needs — road and mountain to electric bike.',
    illustration: bike_ride,
  },
  {
    id: 2,
    title: 'Affordable Rates',
    description:
      'Enjoy competitive pricing with flexible rental plans that fit your budget, schedule and needs.',
    illustration: online_payments,
  },
  {
    id: 3,
    title: 'Easy Booking',
    description:
      'Experience hassle-free booking with our user-friendly platform, its quick and simple.',
    illustration: booking,
  },
  {
    id: 4,
    title: '24/7 Support',
    description:
      'Our support team is available around the clock to assist you whenever you need help.',
    illustration: online_friends,
  },
];

export default function WhyChooseUs() {
  const [cardsInARow, setCardsInARow] = useState(1); // to calculate animation delay
  const screenSize = useScreenSize();

  // set cards in a row based on screen size
  useEffect(() => {
    if (screenSize.width >= 768) {
      setCardsInARow(3);
    } else {
      setCardsInARow(1);
    }
  }, [screenSize.width]);

  return (
    <Section className="bg-gradient-to-r from-background to-foreground/5">
      <Container>
        <SectionTitle>Why Choose Us?</SectionTitle>
        <SectionDescription>
          We are dedicated to offering the premium bikes, affordable rates, easy
          booking, and the 24/7 customer support through our bike rental
          service.
        </SectionDescription>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="p-6 rounded-lg shadow flex flex-col justify-end bg-background"
              data-aos="zoom-in"
              data-aos-delay={(index % cardsInARow) * 100}
            >
              <div className="w-full flex items-end mb-8">
                <img src={feature.illustration} alt="" className="w-full" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground/80">
                {feature.title}
              </h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
