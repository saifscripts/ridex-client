import { IRental } from '@/interfaces';
import { ColumnDef } from '@tanstack/react-table';
import moment from 'moment';
import { CalculateModal } from './CalculateModal';

export const manageRentalColumns: ColumnDef<IRental>[] = [
  {
    accessorKey: 'userId.email',
    header: 'User Email',
  },
  {
    accessorKey: 'startTime',
    header: 'Start Time',
    cell: ({ row }) => moment(row.getValue('startTime')).format('lll'),
  },
  {
    accessorKey: 'returnTime',
    header: 'Return Time',
    cell: ({ row }) => {
      const value = row.getValue('returnTime');
      return value ? moment(value).format('lll') : 'N/A';
    },
  },
  {
    accessorKey: 'rentalStatus',
    header: 'Rental Status',
  },
  {
    accessorKey: 'totalCost',
    header: 'Total Cost',
    cell: ({ row }) => {
      const value = parseFloat(row.getValue('totalCost'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BDT',
      }).format(value);

      return <div className="">{value ? formatted : 'N/A'}</div>;
    },
  },
  {
    accessorKey: 'paidAmount',
    header: 'Paid Amount',
    cell: ({ row }) => {
      const value = parseFloat(row.getValue('paidAmount'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BDT',
      }).format(value);

      return <div className="">{formatted}</div>;
    },
  },
  {
    accessorKey: 'paymentStatus',
    header: 'Payment Status',
  },
  {
    id: 'actions',
    header: () => <div className="text-right mr-2">Action</div>,
    cell: ({ row }) => {
      return (
        <div className="flex justify-end">
          <CalculateModal rental={row.original} />
        </div>
      );
    },
  },
];
