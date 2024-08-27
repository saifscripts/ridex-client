import { ISuccessResponse, IUser } from '@/interfaces';
import { baseApi } from '../../api/baseApi';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({
        url: '/users/me',
        method: 'GET',
      }),
      providesTags: ['User'],
      transformResponse: (res: ISuccessResponse<IUser>) => res.data,
    }),
    updateMe: builder.mutation({
      query: (body) => ({
        url: '/users/me',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['User'],
      transformResponse: (res: ISuccessResponse<IUser>) => res.data,
    }),
  }),
});

export const { useGetMeQuery, useUpdateMeMutation } = userApi;
