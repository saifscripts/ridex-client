import { ColumnDef } from '@tanstack/react-table';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BIKE_BRANDS } from '@/constants';
import {
  CheckboxFilter,
  DataTableColumnHeader,
  RadioButtonFilter,
} from '@/features/table';
import { IBike } from '@/interfaces';
import { ChartNoAxesGantt } from 'lucide-react';
import { Link } from 'react-router-dom';

export const columns: ColumnDef<IBike>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) =>
      (row.getValue('description') as string).split(' ').slice(0, 4).join(' ') +
      ' . . .',
  },
  {
    accessorKey: 'brand',
    header: ({ column }) => (
      <CheckboxFilter
        columnId={column.id}
        title="Brand"
        filters={BIKE_BRANDS.map((item) => ({ value: item, label: item }))}
      />
    ),
  },
  {
    accessorKey: 'model',
    header: 'Model',
  },
  {
    accessorKey: 'year',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Year" />
    ),
  },
  {
    accessorKey: 'cc',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="CC" />
    ),
  },
  {
    accessorKey: 'isAvailable',
    header: ({ column }) => (
      <RadioButtonFilter
        columnId={column.id}
        title="Availability"
        filters={[
          { value: true, label: 'Available' },
          { value: false, label: 'Unavailable' },
        ]}
      />
    ),

    cell: ({ row }) => {
      const isAvailable = row.getValue('isAvailable');

      return (
        <Badge
          className="w-[100px] text-center inline-block"
          variant={isAvailable ? 'default' : 'destructive'}
        >
          {isAvailable ? 'Available' : 'Unavailable'}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'pricePerHour',
    header: ({ column }) => (
      <DataTableColumnHeader className="" column={column} title="Price/Hour" />
    ),
    cell: ({ row }) => {
      const pricePerHour = parseFloat(row.getValue('pricePerHour'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(pricePerHour);

      return <div className="">{formatted}</div>;
    },
  },
  {
    id: 'actions',
    header: () => <div className="text-right mr-2">Action</div>,
    cell: ({ row }) => {
      return (
        <div className="flex justify-end">
          <Link to={`/bike/${row.original._id}`}>
            <Button variant="outline" size="sm" className="flex gap-2">
              <ChartNoAxesGantt className="size-4" />
              View Details
            </Button>
          </Link>
        </div>
      );
    },
  },
];
