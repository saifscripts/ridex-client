import { baseApi } from '../../api/baseApi';

export const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (data) => ({
        url: '/rentals/',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useCreateBookingMutation } = bookingApi;
