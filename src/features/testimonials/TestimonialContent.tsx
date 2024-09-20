import { ContainerMd } from '@/components/layout/Container';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Rating } from '@mui/material';
import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
  {
    id: 1,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Emily Davis',
    rating: 5,
    review:
      'The bike quality was outstanding! I rented an electric bike for a weekend getaway, and it exceeded my expectations.',
  },
  {
    id: 2,
    avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
    name: 'John Smith',
    rating: 4,
    review:
      'I rented a mountain bike for a day and had an amazing experience. The only minor issue was the pickup location being a bit far.',
  },
  {
    id: 3,
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    name: 'Sarah Brown',
    rating: 5,
    review:
      'Excellent service! The 24/7 support team was super helpful when I needed assistance during my ride. I will definitely use this bike rental service again!',
  },
  {
    id: 4,
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    name: 'Michael Lee',
    rating: 4,
    review:
      'Great value for the money. It performed well throughout my trip. Highly recommend it to anyone looking for affordable, reliable bikes.',
  },
  {
    id: 5,
    avatar: 'https://randomuser.me/api/portraits/women/34.jpg',
    name: 'Olivia Johnson',
    rating: 5,
    review:
      "The best bike rental experience I've had! The diverse selection of bikes is impressive, and the rental process was incredibly easy.",
  },
  {
    id: 6,
    avatar: 'https://randomuser.me/api/portraits/men/44.jpg',
    name: 'David Martinez',
    rating: 5,
    review:
      'The customer service was exceptional. I had an issue with my booking, but they resolved it quickly, and I enjoyed a great ride on a well-maintained bike.',
  },
  {
    id: 7,
    avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
    name: 'Sophia Taylor',
    rating: 4,
    review:
      'Rented a road bike for a city tour, and it worked perfectly. The pricing is affordable, and the bikes are well-maintained. Will definitely rent again!',
  },
  {
    id: 8,
    avatar: 'https://randomuser.me/api/portraits/men/31.jpg',
    name: 'James Anderson',
    rating: 5,
    review:
      'I loved the bike and the overall experience. The process was super easy, and the customer support was always there. Highly recommended.',
  },
  {
    id: 9,
    avatar: 'https://randomuser.me/api/portraits/women/43.jpg',
    name: 'Amelia Scott',
    rating: 4,
    review:
      'I rented a mountain bike, and it performed beautifully on some challenging trails. A little pricey, but the quality made up for it.',
  },
  {
    id: 10,
    avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
    name: 'Robert White',
    rating: 5,
    review:
      'Amazing service, excellent bikes, and the booking process was a breeze. I had an enjoyable ride with no issues at all. Will rent again for sure!',
  },
];

export function TestimonialContent() {
  return (
    <ContainerMd>
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="-ml-6">
          {testimonials.map((review) => (
            <CarouselItem
              key={review.id}
              className="md:basis-1/2 lg:basis-1/3 pl-6"
            >
              <AspectRatio
                ratio={4 / 3}
                className="bg-white rounded-lg p-6 text-center flex flex-col justify-between"
              >
                <div>
                  <img
                    src={review.avatar}
                    alt=""
                    className="rounded-full w-12 mx-auto mb-2"
                  />
                  <Rating
                    size="small"
                    value={review.rating}
                    readOnly
                    className="mb-4"
                  />
                  <p className="text-gray-400 mb-4">{review.review}</p>
                </div>
                <p className="text-gray-600">{review.name}</p>
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-4" />
        <CarouselNext className="-right-4" />
      </Carousel>
    </ContainerMd>
  );
}
