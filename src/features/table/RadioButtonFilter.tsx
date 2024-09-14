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
import { ReactNode } from 'react';

interface RadioButtonFilterProps {
  columnId: string;
  filters: { value: string | boolean; label: string }[];
  children: ReactNode;
}

export default function RadioButtonFilter({
  columnId,
  filters,
  children,
}: RadioButtonFilterProps) {
  const { searchParams, replaceSearchParam } = useAppSearchParams();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="default" className="flex gap-2">
          {children}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className="flex gap-2 items-center">
          {children}
        </DropdownMenuLabel>
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
