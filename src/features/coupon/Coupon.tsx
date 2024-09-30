import Container from '@/components/layout/Container';
import {
  Section,
  SectionDescription,
  SectionTitle,
} from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import ActiveCoupons from './ActiveCoupons';
import CouponSteps from './CouponSteps';

export default function Coupon() {
  return (
    <Section className="bg-foreground/5">
      <Container>
        <SectionTitle>Get A Coupon</SectionTitle>
        <SectionDescription>
          To get a coupon, follow these three simple steps:
        </SectionDescription>
        <CouponSteps />
        <ActiveCoupons />
        <div className="flex justify-center mt-8">
          <Button>Spin the wheel</Button>
        </div>
      </Container>
    </Section>
  );
}
