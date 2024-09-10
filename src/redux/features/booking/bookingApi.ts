import { baseApi } from '../../api/baseApi';

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (data) => ({
        url: '/rentals/',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Booking'],
    }),
    initiateRemainingPayment: builder.mutation({
      query: (rentalId) => ({
        url: `/rentals/${rentalId}/pay-remaining`,
        method: 'PUT',
      }),
    }),
    getMyBookings: builder.query({
      query: (params = {}) => ({
        url: '/rentals',
        method: 'GET',
        params,
      }),
      providesTags: ['Booking'],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetMyBookingsQuery,
  useInitiateRemainingPaymentMutation,
} = bookingApi;
