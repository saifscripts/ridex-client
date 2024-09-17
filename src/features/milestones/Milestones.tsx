import { TrophyIcon } from 'lucide-react';

export const Milestones = () => {
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
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4 uppercase">
          Our Journey
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-8">
          From humble beginnings to becoming a leading platform for bike
          rentals, we are proud of the milestones we’ve achieved along the way.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {milestones.map((milestone) => (
            <div
              key={milestone.year}
              className="bg-white p-8 shadow-lg rounded-lg text-center transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex justify-center items-center mb-6">
                {milestone.icon}
              </div>
              <h3 className="text-3xl font-bold text-primary mb-4">
                {milestone.year}
              </h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">
                {milestone.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
