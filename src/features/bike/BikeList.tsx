import { Table } from '@tanstack/react-table';

import { IBike } from '@/interfaces';
import { BikeCard } from './BikeCard';

import { bikeAvailabilityOptions, bikeBrandOptions } from '@/constants';
import {
  CheckboxFilter,
  DataTablePagination,
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
import BikeFilters from './BikeFilters';
import BikeSearch from './BikeSearch';
import BikesSkeleton from './BikesSkeleton';
import { columns } from './columns';

interface BikeDataProps {
  data: IBike[];
  meta: IMetaData;
  isLoading: boolean;
}

export default function BikeList({ data, meta, isLoading }: BikeDataProps) {
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
    <>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-4 p-3 bg-white border rounded-md mb-2">
        <BikeSearch />

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
      <BikeFilters />
      <BikeCards table={table} isLoading={isLoading} />
      <DataTablePagination metaData={meta} pageSizes={[12, 24, 48]} />
    </>
  );
}

function BikeCards({
  table,
  isLoading,
}: {
  table: Table<IBike>;
  isLoading: boolean;
}) {
  if (isLoading) return <BikesSkeleton />;

  return table.getRowModel().rows?.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 my-4">
      {table.getRowModel().rows.map(({ original: bike }) => (
        <BikeCard key={bike._id} bike={bike} />
      ))}
    </div>
  ) : (
    <p className="text-center text-2xl my-8">No Bikes Found</p>
  );
}
