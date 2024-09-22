import { IBike } from '@/interfaces';

import { BikeCard, BikesSkeleton, columns } from '@/features/bike';
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

interface BikeCardsProps {
  data: IBike[];
  isLoading: boolean;
}

export default function BikeCards({ data, isLoading }: BikeCardsProps) {
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

  if (isLoading) return <BikesSkeleton />;

  return table.getRowModel().rows?.length > 0 ? (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 my-4"
      data-aos="fade-up"
    >
      {table.getRowModel().rows.map(({ original: bike }) => (
        <BikeCard key={bike._id} bike={bike} />
      ))}
    </div>
  ) : (
    <p className="text-center text-2xl my-8">No Bikes Found</p>
  );
}
