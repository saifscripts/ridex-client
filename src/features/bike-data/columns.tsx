import { ColumnDef } from '@tanstack/react-table';

import { Badge } from '@/components/ui/badge';
import { BIKE_BRANDS } from '@/constants';
import { IBike } from '@/interfaces';
import { CheckboxFilter, RadioButtonFilter } from '../table';
import { DataTableColumnHeader } from '../table/DataTableColumnHeader';

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
          { value: false, label: 'Not Available' },
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
          {isAvailable ? 'Available' : 'Not Available'}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'pricePerHour',
    header: ({ column }) => (
      <DataTableColumnHeader
        className="justify-end"
        column={column}
        title="Price/Hour"
      />
    ),
    cell: ({ row }) => {
      const pricePerHour = parseFloat(row.getValue('pricePerHour'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(pricePerHour);

      return <div className="text-right font-medium mr-4">{formatted}</div>;
    },
  },
  //   {
  //     id: 'actions',
  //     cell: ({ row }) => {
  //       const payment = row.original;

  //       return (
  //         <DropdownMenu>
  //           <DropdownMenuTrigger asChild>
  //             <Button variant="ghost" className="h-8 w-8 p-0">
  //               <span className="sr-only">Open menu</span>
  //               <MoreHorizontal className="h-4 w-4" />
  //             </Button>
  //           </DropdownMenuTrigger>
  //           <DropdownMenuContent align="end">
  //             <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //             <DropdownMenuItem
  //               onClick={() => navigator.clipboard.writeText(payment.id)}
  //             >
  //               Copy payment ID
  //             </DropdownMenuItem>
  //             <DropdownMenuSeparator />
  //             <DropdownMenuItem>View customer</DropdownMenuItem>
  //             <DropdownMenuItem>View payment details</DropdownMenuItem>
  //           </DropdownMenuContent>
  //         </DropdownMenu>
  //       );
  //     },
  //   },
];
