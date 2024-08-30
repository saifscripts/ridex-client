import { Input } from '@/components/ui/input';
import { BIKE_BRANDS } from '@/constants';
import { Table } from '@tanstack/react-table';

import { DataTableFilter } from '../table';

export default function BikeFilters<TData>({ table }: { table: Table<TData> }) {
  return (
    <div className="flex space-x-2">
      <Input
        placeholder="Search by name..."
        value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
        onChange={(event) =>
          table.getColumn('name')?.setFilterValue(event.target.value)
        }
        className="w-72"
      />

      <DataTableFilter
        table={table}
        filters={BIKE_BRANDS.map((item) => ({ value: item, label: item }))}
        column="brand"
        columnHeader="Brands"
      />

      <DataTableFilter
        table={table}
        filters={[
          { value: true, label: 'Available' },
          { value: false, label: 'Not Available' },
        ]}
        column="isAvailable"
        columnHeader="Status"
      />
    </div>
  );
}
