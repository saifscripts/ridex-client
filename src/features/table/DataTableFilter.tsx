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
import { MixerHorizontalIcon } from '@radix-ui/react-icons';
import { Table } from '@tanstack/react-table';

interface DataTableFilterProps<TData> {
  table: Table<TData>;
  column: string;
  columnHeader: string;
  filters: { value: string | boolean; label: string }[];
}

export default function DataTableFilter<TData>({
  table,
  column,
  columnHeader,
  filters,
}: DataTableFilterProps<TData>) {
  const filteredValue = table.getColumn(column)?.getFilterValue() as string;
  const filteredLabel = filters.find(
    (item) => item.value === filteredValue
  )?.label;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="min-w-32 flex justify-start gap-4 overflow-hidden"
          variant="outline"
        >
          {<MixerHorizontalIcon className="h-4 w-4" />}
          <span>{filteredLabel || columnHeader}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{columnHeader}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {filters.map((item) => (
            <DropdownMenuCheckboxItem
              key={item.label}
              checked={table.getColumn(column)?.getFilterValue() === item.value}
              onCheckedChange={(checked) => {
                if (checked) {
                  table.getColumn(column)?.setFilterValue(item.value);
                } else {
                  table.getColumn(column)?.setFilterValue('');
                }
              }}
            >
              {item.label}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="space-x-2"
          onClick={() => table.getColumn('brand')?.setFilterValue('')}
        >
          <FilterX size={16} />
          <span>Clear Filter</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
