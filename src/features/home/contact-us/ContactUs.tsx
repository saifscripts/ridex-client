import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

export default function ContactUs() {
  return (
    <section className="py-12 bg-yellow-50">
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2 uppercase">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
          We’d love to hear from you! Fill out the form below, and we’ll get
          back to you as soon as possible.
        </p>

        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
}
