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
  }),
});

export const { useGetBikesQuery } = bikeApi;
