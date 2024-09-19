import { ISuccessResponse, IUser } from '@/interfaces';
import { baseApi } from '../../api/baseApi';

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: '/users/',
        method: 'GET',
      }),
      providesTags: ['User'],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['User'],
    }),
    makeAdmin: builder.mutation({
      query: (id) => ({
        url: `/users/${id}/make-admin`,
        method: 'PUT',
      }),
      invalidatesTags: ['User'],
    }),
    removeAdmin: builder.mutation({
      query: (id) => ({
        url: `/users/${id}/remove-admin`,
        method: 'PUT',
      }),
      invalidatesTags: ['User'],
    }),
    getMe: builder.query({
      query: () => ({
        url: '/users/me',
        method: 'GET',
      }),
      providesTags: ['Me'],
      transformResponse: (res: ISuccessResponse<IUser>) => res.data,
    }),
    updateMe: builder.mutation({
      query: (body) => ({
        url: '/users/me',
        method: 'PUT',
        body,
      }),
      invalidatesTags: ['Me'],
      transformResponse: (res: ISuccessResponse<IUser>) => res.data,
    }),
    contactUs: builder.mutation({
      query: (body) => ({
        url: '/users/contact-us',
        method: 'POST',
        body,
      }),
    }),
    uploadAvatar: builder.mutation({
      query: (body: FormData) => ({
        url: '/users/avatar',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Me'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useDeleteUserMutation,
  useMakeAdminMutation,
  useRemoveAdminMutation,
  useGetMeQuery,
  useUpdateMeMutation,
  useContactUsMutation,
  useUploadAvatarMutation,
} = userApi;
