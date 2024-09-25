import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { ICoupon } from '@/interfaces';
import { useGetActiveCouponsQuery } from '@/redux/features/coupon/couponApi';
import Autoplay from 'embla-carousel-autoplay';

export default function ActiveCoupons() {
  const { data: coupons, isLoading } = useGetActiveCouponsQuery('');

  if (isLoading) return <div>Loading...</div>;

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="w-full"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {coupons?.data?.map((coupon: ICoupon) => (
          <CarouselItem key={coupon.code} className="basis-1/2 lg:basis-1/6">
            <Card className="rounded-lg flex flex-col items-center gap-2 p-6">
              <p className="text-foreground/70 text-3xl font-semibold">
                {coupon.discountPercentage}%
              </p>
              <p className="text-foreground/60 text-xl">{coupon.code}</p>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
