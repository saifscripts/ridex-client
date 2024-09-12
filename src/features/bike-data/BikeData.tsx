import {
  DataTable,
  DataTablePagination,
  DataTableViewOptions,
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
    <div className="space-y-4 container my-4">
      <div className="flex items-center justify-between gap-2 p-3 bg-white border rounded-md">
        <BikeSearch />
        <div className="flex gap-2">
          <DataTableViewOptions table={table} />
          <CreateBikeModal />
        </div>
      </div>
      <BikeFilters />
      <DataTable columns={columns} table={table} isLoading={isLoading} />
      <DataTablePagination metaData={meta} />
    </div>
  );
}
