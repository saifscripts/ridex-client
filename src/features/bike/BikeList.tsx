import { bikeAvailabilityOptions, bikeBrandOptions } from '@/constants';
import {
  CheckboxFilter,
  ColumnViewOptions,
  DataTable,
  Pagination,
  RadioButtonFilter,
} from '@/features/table/';
import { IBike, IMetaData } from '@/interfaces';
import {
  ColumnFiltersState,
  SortingState,
  Table,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { BikeIcon, SearchCheckIcon } from 'lucide-react';
import { useState } from 'react';
import ActiveFilters from './ActiveFilters';
import { columns } from './columns';
import CreateBikeModal from './CreateBikeModal';
import SearchInput from './SearchInput';

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
    <div className="space-y-4">
      <FilterOptions table={table} />
      <ActiveFilters />
      <DataTable columns={columns} table={table} isLoading={isLoading} />
      <Pagination metaData={meta} />
    </div>
  );
}

function FilterOptions({ table }: { table: Table<IBike> }) {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-4 p-3 bg-background border rounded-md">
      <SearchInput />

      <div className="flex gap-2 w-full lg:w-auto">
        <ColumnViewOptions table={table} />
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
  );
}
