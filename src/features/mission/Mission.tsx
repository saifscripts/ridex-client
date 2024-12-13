import Container from '@/components/layout/Container';
import {
  Section,
  SectionDescription,
  SectionTitle,
} from '@/components/layout/Section';
import { CheckCircleIcon } from 'lucide-react';

export default function Mission() {
  return (
    <Section className="bg-gradient-to-r to-background from-foreground/5">
      <SectionTitle>Our Mission</SectionTitle>
      <SectionDescription>
        Transforming Cities, One Ride at a Time.
      </SectionDescription>
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          <img
            src="https://res.cloudinary.com/dz6h5okzp/image/upload/v1734086944/harley-davidson-6_OBa-II5Go-unsplash_hklegd.jpg"
            alt="Mission Image"
            className="w-full lg:w-1/2 rounded-lg"
          />
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">
              Transforming Urban Mobility
            </h2>
            <p className="mb-4 text-center lg:text-left">
              RideX aims to transform urban mobility with innovative
              bike-sharing solutions, envisioning cities that are livable,
              sustainable, and connected.
            </p>
            <ul className="list-disc pl-6 lg:pl-2 space-y-2">
              <li className="flex gap-2">
                <CheckCircleIcon size={16} className="text-success" />
                Encourage sustainable mobility solutions to reduce urban carbon
                footprints.
              </li>
              <li className="flex gap-2">
                <CheckCircleIcon size={16} className="text-success" />
                Provide a seamless bike-sharing platform that connects people to
                their destinations.
              </li>
              <li className="flex gap-2">
                <CheckCircleIcon size={16} className="text-success" />
                Encourage an active lifestyle by promoting cycling as a
                transportation option.
              </li>
              <li className="flex gap-2">
                <CheckCircleIcon size={16} className="text-success" />
                Utilize cutting-edge technology for user-friendly booking, and
                payment experiences.
              </li>
              <li className="flex gap-2">
                <CheckCircleIcon size={16} className="text-success" />
                Collaborate with cities to integrate bike-sharing into public
                transportation systems.
              </li>
              <li className="flex gap-2">
                <CheckCircleIcon size={16} className="text-success" />
                Advocate for urban planning that prioritizes non-motorized
                transport solutions.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  );
}
