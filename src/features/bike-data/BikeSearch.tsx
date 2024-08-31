import { Input } from '@/components/ui/input';
import useAppSearchParams from '@/hooks/useAppSearchParams';

export default function BikeSearch() {
  const { searchParams, appendSearchParams } = useAppSearchParams();

  return (
    <Input
      placeholder="Search by name, description, model..."
      value={searchParams.get('searchTerm') ?? ''}
      onChange={(event) =>
        appendSearchParams(
          { searchTerm: event.target.value },
          { replace: true }
        )
      }
      className="w-full sm:w-72"
    />
  );
}
