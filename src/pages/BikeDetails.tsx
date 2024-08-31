import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { useGetSingleBikeQuery } from '@/redux/features/bike/bikeApi';
import { useParams } from 'react-router-dom';
import bikeImg from '../assets/bike.jpg';

export default function BikeDetails() {
  const { bikeId } = useParams();
  const { data, isLoading } = useGetSingleBikeQuery(bikeId);

  const bikeData = data?.data;

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="container py-6">
      <div className="bg-white w-full border rounded-md grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0 p-6 sm:p-8 lg:p-16">
        <div>
          <img
            src={bikeImg}
            alt={`${bikeData.name} ${bikeData.model} ${bikeData.year}`}
            className="w-[80%] block m-auto"
          />
        </div>
        <div className="flex justify-center items-center relative border-l pl-6">
          <div className="w-full">
            <div
              className={cn(
                'font-semibold absolute top-0 right-0 flex gap-2 items-center border py-1 px-3 rounded-full bg-white',
                {
                  'text-green-500': bikeData?.isAvailable,
                  'text-red-400': !bikeData?.isAvailable,
                }
              )}
            >
              <div
                className={cn('size-3 sm:size-4 rounded-full', {
                  'bg-green-500': bikeData?.isAvailable,
                  'bg-red-400': !bikeData?.isAvailable,
                })}
              ></div>
              <p className="text-xs sm:text-base">
                {bikeData?.isAvailable ? 'Available' : 'Not available'}
              </p>
            </div>
            <h1 className="font-semibold text-4xl md:text-5xl text-gray-700 mb-4">
              {bikeData?.name}
            </h1>
            <p className="xs:text-xl text-gray-500 mb-4">
              {bikeData.description}
            </p>

            <Badge variant="secondary" className="xs:text-xl mb-8">
              Price/Hour: ${bikeData?.pricePerHour}
            </Badge>

            <Separator className="w-full mb-4" />
            <div className="flex gap-4 sm:gap-6 lg:gap-8 overflow-hidden">
              <div className="flex-shrink-0">
                <p className="text-gray-500 text-xs xs:text-base">brand</p>
                <p className="text-gray-600 xs:text-xl sm:text-2xl">
                  {bikeData.name}
                </p>
              </div>
              <Separator orientation="vertical" className="h-10 xs:h-16" />
              <div className="flex-shrink-0">
                <p className="text-gray-500 text-xs xs:text-base">model</p>
                <p className="text-gray-600 xs:text-xl sm:text-2xl">
                  {bikeData.model}
                </p>
              </div>
              <Separator orientation="vertical" className="h-10 xs:h-16" />
              <div className="flex-shrink-0">
                <p className="text-gray-500 text-xs xs:text-base">year</p>
                <p className="text-gray-600 xs:text-xl sm:text-2xl">
                  {bikeData.year}
                </p>
              </div>
              <Separator orientation="vertical" className="h-10 xs:h-16" />
              <div className="flex-shrink-0">
                <p className="text-gray-500 text-xs xs:text-base">cc</p>
                <p className="text-gray-600 xs:text-xl sm:text-2xl">
                  {bikeData.cc}
                </p>
              </div>
              <Separator orientation="vertical" className="h-10 xs:h-16" />
              <Separator orientation="vertical" className="h-10 xs:h-16" />
              <Separator orientation="vertical" className="h-10 xs:h-16" />
              <Separator orientation="vertical" className="h-10 xs:h-16" />
              <Separator orientation="vertical" className="h-10 xs:h-16" />
              <Separator orientation="vertical" className="h-10 xs:h-16" />
              <Separator orientation="vertical" className="h-10 xs:h-16" />
              <Separator orientation="vertical" className="h-10 xs:h-16" />
              <Separator orientation="vertical" className="h-10 xs:h-16" />
              <Separator orientation="vertical" className="h-10 xs:h-16" />
              {/* <div>
                <p className="text-gray-500 text-xs xs:text-base">availability</p>
                <p className="text-gray-600 xs:text-xl sm:text-2xl">
                  {bikeData.isAvailable ? 'available' : 'not available'}
                </p>
              </div> */}
            </div>
            <Separator className="w-full mt-4 mb-8" />

            <div className="text-center lg:text-left">
              <Button
                className="w-60"
                size="lg"
                disabled={!bikeData?.isAvailable}
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
