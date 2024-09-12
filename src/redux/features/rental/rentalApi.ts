import { baseApi } from '../../api/baseApi';

export const rentalApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createRental: builder.mutation({
      query: (data) => ({
        url: '/rentals/',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Rental'],
    }),
    initiateRemainingPayment: builder.mutation({
      query: (rentalId) => ({
        url: `/rentals/${rentalId}/pay-remaining`,
        method: 'PUT',
      }),
    }),
    getMyRentals: builder.query({
      query: (params = {}) => ({
        url: '/rentals',
        method: 'GET',
        params,
      }),
      providesTags: ['Rental'],
    }),
  }),
});

export const {
  useCreateRentalMutation,
  useGetMyRentalsQuery,
  useInitiateRemainingPaymentMutation,
} = rentalApi;
