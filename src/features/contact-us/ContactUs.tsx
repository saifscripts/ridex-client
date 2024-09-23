import { ContainerMd } from '@/components/layout/Container';
import {
  Section,
  SectionDescription,
  SectionTitle,
} from '@/components/layout/Section';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function ContactUs() {
  return (
    <Section>
      <SectionTitle>Get In Touch</SectionTitle>

      <SectionDescription>
        We’d love to hear from you! Fill out the form below, and we’ll get back
        to you as soon as possible.
      </SectionDescription>

      <ContainerMd>
        <ContactInfo />
        <ContactForm />
      </ContainerMd>
    </Section>
  );
}
