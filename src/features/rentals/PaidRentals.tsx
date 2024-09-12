import { PAYMENT_STATUS } from '@/constants';
import { useGetMyRentalsQuery } from '@/redux/features/rental/rentalApi';
import MyRentalData from './MyRentalData';
import { paidRentalColumns } from './paidRentalColumns';

export function PaidRentals() {
  const { data: rentals, isFetching } = useGetMyRentalsQuery({
    paymentStatus: PAYMENT_STATUS.PAID,
  });

  return (
    <MyRentalData
      columns={paidRentalColumns}
      data={rentals?.data || []}
      isLoading={isFetching}
    />
  );
}
