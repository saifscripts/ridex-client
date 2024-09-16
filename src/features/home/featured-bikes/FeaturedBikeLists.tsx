import { Table } from '@tanstack/react-table';

import { IBike } from '@/interfaces';

import { Button } from '@/components/ui/button';
import { BikeCard, BikesSkeleton, columns } from '@/features/bike-data';
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
import { Link } from 'react-router-dom';

interface BikeDataProps {
  data: IBike[];
  isLoading: boolean;
}

export default function FeaturedBikeList({ data, isLoading }: BikeDataProps) {
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
    <div className="py-12 container">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-2 uppercase">
        Featured Bikes
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Discover our most popular bikes, ready for your next adventure.
      </p>
      <BikeCards table={table} isLoading={isLoading} />
      <div className="mt-8 text-center">
        <Link to="/bikes">
          <Button variant="outline" size="sm">
            View All Bikes
          </Button>
        </Link>
      </div>
    </div>
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
