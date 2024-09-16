import { TestimonialContent } from './TestimonialContent';

export default function Testimonials() {
  return (
    <section className="py-12">
      <div className="container lg:max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2 uppercase">
          Testimonials
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-xl mx-auto">
          Here is what our riders say about us.
        </p>

        <TestimonialContent />
      </div>
    </section>
  );
}
