import { Button } from '@/components/ui/button';
import { BIKE_BRANDS } from '@/constants';
import useAppSearchParams from '@/hooks/useAppSearchParams';
import { FilterXIcon, XIcon } from 'lucide-react';

// Fields to exclude from active filters
const excludeFields = ['sort', 'limit', 'page', 'fields'];

const BIKE_BRANDS_MAPPER: Record<string, string> = {};

BIKE_BRANDS.forEach((brand) => {
  BIKE_BRANDS_MAPPER[brand] = brand;
});

// Map availability from boolean to string
const AVAILABILITY_MAPPER: Record<string, string> = {
  true: 'Available',
  false: 'Unavailable',
};

export default function ActiveFilters() {
  const { searchParams, replaceSearchParam, setSearchParams } =
    useAppSearchParams();

  // Extract active filters from searchParams
  const activeFilters = [...searchParams].filter(
    ([key]) => !excludeFields.includes(key)
  );

  if (!activeFilters?.length) return;

  return (
    <div className="flex gap-2 p-3 bg-background border rounded-md flex-wrap items-center">
      <p className="text-xs">Filtered By</p>

      {activeFilters?.map(([key, value]) => (
        <Button
          variant="outline"
          key={value}
          className="flex gap-2 items-center rounded-full"
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
        variant="secondary"
        className="flex gap-2 items-center rounded-full"
        onClick={() => {
          const others = [...searchParams].filter(([key]) =>
            excludeFields.includes(key)
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
