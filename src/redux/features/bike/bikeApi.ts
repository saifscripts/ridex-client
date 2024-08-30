import { IBike, ISuccessResponse } from '@/interfaces';
import { baseApi } from '../../api/baseApi';

export const bikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBikes: builder.query({
      query: () => ({
        url: '/bikes/',
        method: 'GET',
      }),
      providesTags: ['Bike'],
      transformResponse: (res: ISuccessResponse<IBike[]>) => res.data,
    }),
  }),
});

export const { useGetBikesQuery } = bikeApi;
