import { manageRentalColumns, RentalData } from '@/features/rentals';
import { useGetAllRentalsQuery } from '@/redux/features/rental/rentalApi';

export default function ManageRentals() {
  const { data: rentals, isFetching } = useGetAllRentalsQuery('');

  return (
    <RentalData
      columns={manageRentalColumns}
      data={rentals?.data || []}
      isLoading={isFetching}
    />
  );
}
