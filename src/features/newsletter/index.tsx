import newsletter from '@/assets/illustrations/undraw_newsletter_re_wrob.svg';
import Container from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export default function NewsLetter() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { email: '' },
  });

  const onSubmit = () => {
    toast.success('Subscription successful!');
    reset();
  };

  return (
    <Section className="bg-gradient-to-r from-background to-foreground/5 w-full relative">
      <Container className="flex flex-col md:flex-row gap-20 md:gap-8 justify-center items-center relative z-10 overflow-y-auto hide-scrollbar">
        <div
          className="flex flex-col justify-center gap-8 text-center md:text-left flex-1 pt-20 md:pt-0"
          data-aos="fade-right"
        >
          <h1 className="text-5xl font-semibold">Stay Ahead of the Ride</h1>
          <p>
            Stay ahead of the curve with our exclusive newsletter, packed with
            the latest news, limited-time promotions, and insider tips to
            enhance your biking experience. From new bike releases to special
            discounts, we'll keep you informed and ready to ride.
          </p>

          {/* Action Buttons */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex items-center xs:justify-center md:justify-start gap-4 flex-col xs:flex-row"
          >
            <Input
              {...register('email')}
              type="email"
              placeholder="example@email.com"
            />
            <Button>Subscribe</Button>
          </form>
        </div>

        <div className="flex items-center justify-end">
          <img
            src={newsletter}
            alt="Newsletter Illustration"
            className="w-2/3"
          />
        </div>
      </Container>
    </Section>
  );
}
