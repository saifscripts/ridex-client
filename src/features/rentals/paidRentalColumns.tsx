import { IRental } from '@/constants';
import { ColumnDef } from '@tanstack/react-table';
import moment from 'moment';

export const paidRentalColumns: ColumnDef<IRental>[] = [
  {
    accessorKey: 'bikeId.name',
    header: 'Bike Name',
  },
  {
    accessorKey: 'bikeId.pricePerHour',
    header: 'Price/Hour',
    cell: ({ row }) => {
      const value = parseFloat(row.getValue('bikeId_pricePerHour'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BDT',
      }).format(value);

      return <div className="">{formatted}</div>;
    },
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
      const totalCost = parseFloat(row.getValue('paidAmount'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BDT',
      }).format(totalCost);
      return <div className="">{formatted}</div>;
    },
  },
];
