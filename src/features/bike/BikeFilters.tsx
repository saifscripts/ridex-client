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
  const { searchParams, replaceSearchParam, setSearchParams } =
    useAppSearchParams();

  const filters = [...searchParams].filter(
    ([key]) => !uniqueFields.includes(key)
  );

  if (!filters?.length) return;

  return (
    <div className="flex gap-2 p-3 bg-white border rounded-md flex-wrap items-center">
      <p className="text-xs">Filtered By</p>
      {filters?.map(([key, value]) => (
        <Button
          variant="ghost"
          key={value}
          className="flex gap-2 items-center bg-gray-50 rounded-full"
          onClick={() => replaceSearchParam({ key, value }, { page: '1' })}
        >
          {key === 'brand'
            ? BIKE_BRANDS_MAPPER[value]
            : key === 'isAvailable'
            ? AVAILABILITY_MAPPER[String(value)]
            : value}
          <XIcon size={16} />
        </Button>
      ))}

      <Button
        className="flex gap-2 items-center bg-orange-100 rounded-full"
        onClick={() => {
          const others = [...searchParams].filter(([key]) =>
            uniqueFields.includes(key)
          );

          const params = new URLSearchParams(others);
          params.append('page', '1');
          setSearchParams(params, { replace: true });
        }}
      >
        <FilterXIcon size={16} />
        Clear All
      </Button>
    </div>
  );
}
