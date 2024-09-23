import { FilterX } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useAppSearchParams from '@/hooks/useAppSearchParams';
import { ReactNode } from 'react';

interface CheckboxFilterProps {
  columnId: string;
  filters: { value: string | boolean; label: string }[];
  children: ReactNode;
}

export default function CheckboxFilter({
  columnId,
  filters,
  children,
}: CheckboxFilterProps) {
  const { searchParams, appendSearchParams, replaceSearchParam } =
    useAppSearchParams();

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

        <DropdownMenuGroup>
          {filters.map((item) => {
            const checked =
              [...searchParams].findIndex(
                ([key, value]) =>
                  key === columnId && value === String(item.value)
              ) > -1;

            return (
              <DropdownMenuCheckboxItem
                key={item.label}
                checked={checked}
                onCheckedChange={(checked) => {
                  if (checked) {
                    appendSearchParams(
                      {
                        [columnId]: String(item.value),
                        page: '1',
                      },
                      { replace: true }
                    );
                  } else {
                    replaceSearchParam(
                      {
                        key: columnId,
                        value: String(item.value),
                      },
                      { page: '1' },
                      { replace: true }
                    );
                  }
                }}
              >
                {item.label}
              </DropdownMenuCheckboxItem>
            );
          })}
        </DropdownMenuGroup>

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
