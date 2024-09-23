import { IBike } from '@/interfaces';

import { bikeAvailabilityOptions, bikeBrandOptions } from '@/constants';
import {
  CheckboxFilter,
  Pagination,
  RadioButtonFilter,
} from '@/features/table/';
import { IMetaData } from '@/interfaces';
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { BikeIcon, SearchCheckIcon } from 'lucide-react';
import { useState } from 'react';
import ActiveFilters from './ActiveFilters';
import BikeCards from './BikeCards';
import { columns } from './columns';
import SearchInput from './SearchInput';

interface BikeDataProps {
  data: IBike[];
  meta: IMetaData;
  isLoading: boolean;
}

export default function BikeData({ data, meta, isLoading }: BikeDataProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="space-y-4">
      <FilterOptions />
      <ActiveFilters />
      <BikeCards table={table} isLoading={isLoading} />
      <Pagination metaData={meta} pageSizes={[12, 24, 48]} />
    </div>
  );
}

function FilterOptions() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-4 p-3 bg-background border rounded-md">
      <SearchInput />

      <div className="flex items-center gap-2 w-full lg:w-auto">
        <p>Filters:</p>
        <CheckboxFilter columnId="brand" filters={bikeBrandOptions}>
          <BikeIcon size={16} />
          <span className="hidden sm:inline">Brand</span>
        </CheckboxFilter>
        <RadioButtonFilter
          columnId={'isAvailable'}
          filters={bikeAvailabilityOptions}
        >
          <SearchCheckIcon size={16} />
          <span className="hidden sm:inline">Availability</span>
        </RadioButtonFilter>
      </div>
    </div>
  );
}
