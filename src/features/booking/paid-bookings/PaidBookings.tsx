import { PAYMENT_STATUS } from '@/constants';
import { DataTable } from '@/features/table';
import { useGetMyBookingsQuery } from '@/redux/features/booking/bookingApi';
import { columns } from './columns';

export default function PaidBookings() {
  const { data: bookings, isFetching } = useGetMyBookingsQuery({
    paymentStatus: PAYMENT_STATUS.PAID,
  });

  return (
    <div className="space-y-4 container my-4">
      <DataTable
        columns={columns}
        data={bookings?.data || []}
        isLoading={isFetching}
      />
    </div>
  );
}
