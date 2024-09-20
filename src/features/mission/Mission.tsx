import {
  Section,
  SectionDescription,
  SectionTitle,
} from '@/components/layout/Section';

export default function Mission() {
  return (
    <Section className="container">
      <SectionTitle>Our Mission</SectionTitle>
      <SectionDescription className="mb-0">
        At BIKELAGBE, our mission is to transform urban mobility through
        innovative bike-sharing solutions. We envision a future where cities are
        more livable, sustainable, and connected. Our purpose is to provide
        accessible, eco-friendly transportation options that reduce carbon
        emissions and traffic congestion. We are committed to empowering
        communities, promoting health and wellness, and contributing to a
        greener planet for generations to come.
      </SectionDescription>
    </Section>
  );
}
