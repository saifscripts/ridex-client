import { columns } from '@/features/users';
import UserData from '@/features/users/UserData';
import { useGetUsersQuery } from '@/redux/features/user/userApi';

export default function ManageUsers() {
  const { data: users, isFetching } = useGetUsersQuery('');

  return (
    <UserData
      columns={columns}
      data={users?.data || []}
      isLoading={isFetching}
    />
  );
}
