import ceo from '@/assets/ceo.jpg';
import Container from '@/components/layout/Container';
import {
  Section,
  SectionDescription,
  SectionTitle,
} from '@/components/layout/Section';

const teamMembers = [
  {
    name: 'Saif Elham',
    role: 'CEO & Founder',
    avatar: ceo,
    description:
      'Saif is the visionary behind RideX, with a passion for sustainable transport and over a decade of experience in the tech industry.',
  },
  {
    name: 'Jane Smith',
    role: 'CTO',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    description:
      'Jane leads our tech team, ensuring a seamless and efficient rental experience for all users.',
  },
  {
    name: 'Alice Johnson',
    role: 'Marketing Manager',
    avatar: 'https://randomuser.me/api/portraits/women/77.jpg',
    description:
      'Alice manages our marketing efforts, helping us reach more users and promote our mission.',
  },
  {
    name: 'Bob Brown',
    role: 'Operations Director',
    avatar: 'https://randomuser.me/api/portraits/men/31.jpg',
    description:
      'Bob oversees our operations, ensuring smooth bike distribution and maintenance.',
  },
  {
    name: 'Charlie Davis',
    role: 'Customer Support Specialist',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    description:
      'Charlie is the first point of contact for our users, ensuring their needs are met and their experience is top-notch.',
  },
  {
    name: 'David Lee',
    role: 'Software Engineer',
    avatar: 'https://randomuser.me/api/portraits/men/95.jpg',
    description:
      'David is a key member of our tech team, responsible for coding and debugging.',
  },
];

export default function Team() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionTitle>Meet the Team</SectionTitle>
        <SectionDescription>
          Meet our diverse team who made this possible. They are the reason we
          are here today.
        </SectionDescription>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center shadow-md p-4 rounded-lg"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                className="w-32 h-32 rounded-full mx-auto mb-4"
                src={member.avatar}
                alt={member.name}
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
              <p className="mt-4">{member.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
