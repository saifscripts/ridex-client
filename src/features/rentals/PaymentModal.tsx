import AppForm from '@/components/form/AppForm';
import Submit from '@/components/form/Submit';
import ProtectedRoute from '@/components/layout/ProtectedRoute';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
} from '@/components/ui/table';
import { RENTAL_STATUS, USER_ROLE } from '@/constants';
import { IRental } from '@/interfaces';
import { cn } from '@/lib/utils';
import { CreditCardIcon, ListPlus } from 'lucide-react';

import { useInitiateRemainingPaymentMutation } from '@/redux/features/rental/rentalApi';
import { useState } from 'react';

interface RentNowModalProps {
  rental: IRental;
  className?: string;
}

export function PaymentModal({ rental, className }: RentNowModalProps) {
  const [initiatePayment] = useInitiateRemainingPaymentMutation();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);
    const result = await initiatePayment(rental._id);
    if (result?.data?.success) {
      window.location.href = result?.data?.data?.payment_url;
    } else {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          disabled={rental.rentalStatus === RENTAL_STATUS.ONGOING}
          className={cn('flex items-center gap-2 w-60', className)}
        >
          <ListPlus size={16} />
          Pay
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <ProtectedRoute authorizedRoles={[USER_ROLE.ADMIN, USER_ROLE.USER]}>
          <DialogHeader>
            <DialogTitle>
              Pay {(rental.totalCost - rental.paidAmount).toFixed(2)} BDT
            </DialogTitle>

            <DialogDescription>
              Apply your coupon code if you have any
            </DialogDescription>
          </DialogHeader>

          <Table>
            {/* TODO: Add Total Hours and Price Per Hour */}
            <TableBody>
              <TableRow>
                <TableCell className="font-semibold">Total Bill</TableCell>
                <TableCell className="text-right font-semibold">
                  {rental.totalCost.toFixed(2)} BDT
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Paid</TableCell>
                <TableCell className="text-right">
                  {rental.paidAmount.toFixed(2)} BDT
                </TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell>Due</TableCell>
                <TableCell className="text-right">
                  {(rental.totalCost - rental.paidAmount).toFixed(2)} BDT
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
          <AppForm onSubmit={onSubmit}>
            <Submit
              disabled={isLoading}
              className="w-full flex items-center gap-2"
            >
              <CreditCardIcon size={16} />
              Complete Payment
            </Submit>
          </AppForm>
        </ProtectedRoute>
      </DialogContent>
    </Dialog>
  );
}
