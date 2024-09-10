import { Button } from '@/components/ui/button';
import { BIKE_BRANDS } from '@/constants';
import useAppSearchParams from '@/hooks/useAppSearchParams';
import { FilterXIcon, XIcon } from 'lucide-react';

const uniqueFields = ['sort', 'limit', 'page', 'fields'];

const BIKE_BRANDS_MAPPER: Record<string, string> = {};

BIKE_BRANDS.forEach((brand) => {
  BIKE_BRANDS_MAPPER[brand] = brand;
});

const AVAILABILITY_MAPPER: Record<string, string> = {
  true: 'Available',
  false: 'Unavailable',
};

export default function BikeFilters() {
  const { searchParams, deleteSearchParam, setSearchParams } =
    useAppSearchParams();

  const filters = [...searchParams].filter(
    ([key]) => !uniqueFields.includes(key)
  );

  if (!filters?.length) return;

  return (
    <div className="flex gap-2 p-3 bg-white border rounded-md flex-wrap">
      {filters?.map(([key, value]) => (
        <Button
          variant="ghost"
          key={value}
          className="flex gap-2 items-center bg-gray-50 rounded-full"
          onClick={() => deleteSearchParam({ key, value })}
        >
          {key === 'brand'
            ? BIKE_BRANDS_MAPPER[value]
            : key === 'isAvailable'
            ? AVAILABILITY_MAPPER[String(value)]
            : value}
          <XIcon className="size-4" />
        </Button>
      ))}

      <Button
        className="flex gap-2 items-center bg-orange-100 rounded-full"
        onClick={() => {
          const others = [...searchParams].filter(([key]) =>
            uniqueFields.includes(key)
          );

          const params = new URLSearchParams(others);

          setSearchParams(params);
        }}
      >
        <FilterXIcon className="size-4" />
        Clear Filters
      </Button>
    </div>
  );
}
