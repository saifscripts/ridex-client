import { IRental, RENTAL_STATUS } from '@/constants';
import { ColumnDef } from '@tanstack/react-table';
import moment from 'moment';
import PayButton from './PayButton';

export const unpaidRentalColumns: ColumnDef<IRental>[] = [
  {
    accessorKey: 'bikeId.name',
    header: 'Bike Name',
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
    id: 'actions',
    header: () => <div className="text-right mr-2">Action</div>,
    cell: ({ row }) => {
      const rentalId = row.original._id;
      const rentalStatus = row.getValue('rentalStatus');
      const totalCost = row.getValue('totalCost') as number;
      const paidAmount = row.getValue('paidAmount') as number;
      const unpaidAmount = totalCost - paidAmount;

      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BDT',
      }).format(unpaidAmount > 0 ? unpaidAmount : 0);

      return (
        <div className="flex justify-end">
          <PayButton
            rentalId={rentalId}
            disabled={rentalStatus === RENTAL_STATUS.ONGOING}
          >
            Pay {formatted}
          </PayButton>
        </div>
      );
    },
  },
];
