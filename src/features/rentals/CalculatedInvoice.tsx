import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
} from '@/components/ui/table';
import { IRental } from '@/constants';
import { useWatch } from 'react-hook-form';
import { calculateTotalCost } from './utils';

interface CalculatedInvoiceProps {
  rental: IRental;
}

export function CalculatedInvoice({ rental }: CalculatedInvoiceProps) {
  const { startTime, returnTime } = useWatch();

  const pricePerHour = Number(rental.bikeId.pricePerHour);
  const totalCost = calculateTotalCost(startTime, returnTime, pricePerHour);

  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCell className="font-semibold">Total Cost</TableCell>
          <TableCell className="text-right font-semibold">
            {totalCost} BDT
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Total Paid</TableCell>
          <TableCell className="text-right">{rental.paidAmount} BDT</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total Due</TableCell>
          <TableCell className="text-right">
            {totalCost - rental.paidAmount} BDT
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
