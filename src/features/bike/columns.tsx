import { Badge } from '@/components/ui/badge';
import { DataTableColumnHeader } from '@/features/table';
import { IBike } from '@/interfaces';
import { ColumnDef } from '@tanstack/react-table';
import DeleteBikeModal from './DeleteBikeModal';
import UpdateBikeModal from './UpdateBikeModal';

export const columns: ColumnDef<IBike>[] = [
  {
    accessorKey: 'imageURL',
    header: 'Thumbnail',
    cell: ({ row }) => {
      return (
        <img src={row.original.imageURL} alt="bike" className="w-12 rounded" />
      );
    },
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Name"
        ascLabel="A to Z"
        dscLabel="Z to A"
      />
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
      <DataTableColumnHeader
        column={column}
        title="Brand"
        ascLabel="A to Z"
        dscLabel="Z to A"
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
    header: 'Availability',

    cell: ({ row }) => {
      const isAvailable = row.getValue('isAvailable');

      return (
        <Badge
          className="w-[100px] text-center inline-block"
          variant={isAvailable ? 'success' : 'destructive'}
        >
          {isAvailable ? 'Available' : 'Unavailable'}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'pricePerHour',
    header: ({ column }) => (
      <DataTableColumnHeader
        className=""
        column={column}
        title="Price/Hour"
        ascLabel="Low to High"
        dscLabel="High to Low"
      />
    ),
    cell: ({ row }) => {
      const pricePerHour = parseFloat(row.getValue('pricePerHour'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BDT',
      }).format(pricePerHour);

      return <div className="">{formatted}</div>;
    },
  },
  {
    id: 'actions',
    header: () => <div className="text-right">Action</div>,
    cell: ({ row }) => {
      return (
        <div className="flex justify-end gap-1">
          <UpdateBikeModal bike={row.original} />
          <DeleteBikeModal bike={row.original} />
        </div>
      );
    },
  },
];
