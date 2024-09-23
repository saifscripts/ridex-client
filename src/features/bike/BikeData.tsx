import { bikeAvailabilityOptions, bikeBrandOptions } from '@/constants';
import {
  CheckboxFilter,
  DataTable,
  DataTablePagination,
  DataTableViewOptions,
  RadioButtonFilter,
} from '@/features/table/';
import { IBike, IMetaData } from '@/interfaces';
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
import { columns } from './columns';
import CreateBikeModal from './CreateBikeModal';

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
    <div className="space-y-2">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-4 p-3 bg-background border rounded-md">
        <BikeSearch />

        <div className="flex gap-2 w-full lg:w-auto">
          <DataTableViewOptions table={table} />
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
          <CreateBikeModal />
        </div>
      </div>
      <BikeFilters />
      <DataTable columns={columns} table={table} isLoading={isLoading} />
      <DataTablePagination metaData={meta} />
    </div>
  );
}
