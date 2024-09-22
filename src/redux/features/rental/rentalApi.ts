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
    getAllRentals: builder.query({
      query: (params = {}) => ({
        url: '/rentals/all',
        method: 'GET',
        params,
      }),
      providesTags: ['Rental'],
    }),
    returnBike: builder.mutation({
      query: (options) => ({
        url: `/rentals/${options.rentalId}/return`,
        method: 'PUT',
        body: options.body,
      }),
      invalidatesTags: ['Rental', 'Bike'],
    }),
  }),
});

export const {
  useCreateRentalMutation,
  useGetMyRentalsQuery,
  useGetAllRentalsQuery,
  useInitiateRemainingPaymentMutation,
  useReturnBikeMutation,
} = rentalApi;
