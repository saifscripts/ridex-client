import {
  Section,
  SectionDescription,
  SectionTitle,
} from '@/components/layout/Section';
import { TestimonialContent } from './TestimonialContent';

export default function Testimonials() {
  return (
    <Section>
      <SectionTitle>Testimonials</SectionTitle>
      <SectionDescription>
        Here is what our riders say about us.
      </SectionDescription>
      <TestimonialContent />
    </Section>
  );
}
