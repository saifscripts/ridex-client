import {
  Section,
  SectionDescription,
  SectionTitle,
} from '@/components/layout/Section';
import useScreenSize from '@/hooks/useScreenSize';
import { TrophyIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

const milestones = [
  {
    year: 2019,
    icon: <TrophyIcon size={40} className="text-primary" />,
    title: 'Platform launched',
    description:
      'Platform launched with the goal of revolutionizing the way people rent bikes.',
  },
  {
    year: 2020,
    icon: <TrophyIcon size={40} className="text-primary" />,
    title: 'Reached 10,000+ users',
    description: 'Reached 10,000+ users, expanding our reach to more cities.',
  },
  {
    year: 2022,
    icon: <TrophyIcon size={40} className="text-primary" />,
    title: 'Introduced premium features',
    description: 'Introduced premium features, extended the user experience.',
  },
];

export const Milestones = () => {
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
    <Section className="container">
      <SectionTitle>Our Journey</SectionTitle>

      <SectionDescription>
        From humble beginnings to becoming a leading platform for bike rentals,
        we are proud of the milestones we’ve achieved along the way.
      </SectionDescription>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {milestones.map((milestone, index) => (
          <div
            key={milestone.year}
            className="p-8 shadow-lg rounded-lg text-center transition-all duration-300 hover:shadow-xl border"
            data-aos="zoom-in"
            data-aos-delay={(index % cardsInARow) * 100}
          >
            <div className="flex justify-center items-center mb-6">
              {milestone.icon}
            </div>

            <h3 className="text-3xl font-bold text-primary mb-4">
              {milestone.year}
            </h3>

            <h4 className="text-xl font-semibold text-foreground/80 mb-3">
              {milestone.title}
            </h4>

            <p className="text-foreground/60 leading-relaxed">
              {milestone.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
