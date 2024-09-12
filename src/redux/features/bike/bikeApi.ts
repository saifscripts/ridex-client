import { generateParams } from '@/lib/utils';
import { baseApi } from '../../api/baseApi';

export const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBikes: builder.query({
      query: (params = {}) => ({
        url: '/bikes/',
        method: 'GET',
        params: generateParams(params),
      }),
      providesTags: ['Bike'],
    }),
    getSingleBike: builder.query({
      query: (id) => ({
        url: `/bikes/${id}`,
        method: 'GET',
      }),
      providesTags: ['Bike'],
    }),
    updateBike: builder.mutation({
      query: (options) => ({
        url: `/bikes/${options.id}`,
        method: 'PUT',
        body: options.body,
      }),
      invalidatesTags: ['Bike'],
    }),
    deleteBike: builder.mutation({
      query: (id) => ({
        url: `/bikes/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Bike'],
    }),
  }),
});

export const {
  useGetBikesQuery,
  useGetSingleBikeQuery,
  useUpdateBikeMutation,
  useDeleteBikeMutation,
} = bikeApi;
