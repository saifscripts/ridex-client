import illustration1 from '@/assets/illustrations/bike_ride_7xit.svg';
import illustration3 from '@/assets/illustrations/online_friends_re_eqaj.svg';
import illustration2 from '@/assets/illustrations/online_payments_re_y8f2.svg';
import Container, { ContainerMd } from '@/components/layout/Container';
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
    illustration: illustration1,
  },
  {
    id: 2,
    title: 'Affordable Rates',
    description:
      'Enjoy competitive pricing with flexible rental plans that fit your budget, schedule and needs.',
    illustration: illustration2,
  },
  {
    id: 3,
    title: '24/7 Support',
    description:
      'Our customer support team is available around the clock to assist you whenever you need help.',
    illustration: illustration3,
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
    <Section>
      <Container>
        <SectionTitle>Why Choose Us?</SectionTitle>
        <SectionDescription>
          We are dedicated to offering the premium bikes, affordable rates, and
          the 24/7 customer support through our bike rental service.
        </SectionDescription>
        <ContainerMd className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="p-6 rounded-lg shadow flex flex-col justify-end border"
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
        </ContainerMd>
      </Container>
    </Section>
  );
}
