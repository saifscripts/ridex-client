import { baseApi } from '../../api/baseApi';

export const couponApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getActiveCoupons: builder.query({
      query: () => ({
        url: '/coupons/active',
        method: 'GET',
      }),
      providesTags: ['Coupon'],
    }),
  }),
});

export const { useGetActiveCouponsQuery } = couponApi;
