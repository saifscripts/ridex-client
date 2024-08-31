import { FilterX } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useAppSearchParams from '@/hooks/useAppSearchParams';
import { MixerVerticalIcon } from '@radix-ui/react-icons';

interface DataTableFilterProps {
  columnId: string;
  title: string;
  filters: { value: string | boolean; label: string }[];
}

export default function CheckboxFilter({
  columnId,
  title,
  filters,
}: DataTableFilterProps) {
  const { searchParams, replaceSearchParam } = useAppSearchParams();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="-ml-3 h-8 data-[state=open]:bg-accent"
        >
          <span>{title}</span>
          {<MixerVerticalIcon className="ml-2 h-4 w-4" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{title}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={searchParams.get(columnId) || undefined}
          onValueChange={(value) => {
            replaceSearchParam(
              { key: columnId },
              {
                [columnId]: value,
                page: '1',
              },
              { replace: true }
            );
          }}
        >
          {filters.map((item) => {
            return (
              <DropdownMenuRadioItem
                key={item.label}
                value={String(item.value)}
              >
                {item.label}
              </DropdownMenuRadioItem>
            );
          })}
        </DropdownMenuRadioGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="space-x-2"
          onClick={() =>
            replaceSearchParam(
              {
                key: columnId,
              },
              {
                page: '1',
              },
              { replace: true }
            )
          }
        >
          <FilterX size={16} />
          <span>Clear Filter</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
