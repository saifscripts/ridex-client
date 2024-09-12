import { PAYMENT_STATUS } from '@/constants';
import { useGetMyRentalsQuery } from '@/redux/features/rental/rentalApi';
import MyRentalData from './MyRentalData';
import { unpaidRentalColumns } from './unpaidRentalColumns';

export function UnpaidRentals() {
  const { data: rentals, isFetching } = useGetMyRentalsQuery({
    paymentStatus: PAYMENT_STATUS.UNPAID,
  });

  return (
    <MyRentalData
      columns={unpaidRentalColumns}
      data={rentals?.data || []}
      isLoading={isFetching}
    />
  );
}
