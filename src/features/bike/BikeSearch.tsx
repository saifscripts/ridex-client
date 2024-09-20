import { Input } from '@/components/ui/input';
import useAppSearchParams from '@/hooks/useAppSearchParams';

export default function BikeSearch() {
  const { searchParams, appendSearchParams } = useAppSearchParams();

  return (
    <Input
      placeholder="Search bikes"
      value={searchParams.get('searchTerm') ?? ''}
      onChange={(event) =>
        appendSearchParams(
          { searchTerm: event.target.value },
          { replace: true }
        )
      }
      className="w-full lg:w-72"
    />
  );
}
