import { USER_ROLE } from '@/constants';
import { IUser } from '@/interfaces';
import { ColumnDef } from '@tanstack/react-table';
import DeleteUserModal from './DeleteUserModal';
import MakeAdminModal from './MakeAdminModal';
import RemoveAdminModal from './RemoveAdminModal';

export const columns: ColumnDef<IUser>[] = [
  {
    accessorKey: 'name',
    header: 'User Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
  },
  {
    accessorKey: 'address',
    header: 'Address',
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
  {
    id: 'actions',
    header: () => <div className="text-right mr-2">Action</div>,
    cell: ({ row }) => {
      const user = row.original;

      return (
        <div className="flex justify-end">
          {user?.role === USER_ROLE.ADMIN ? (
            <RemoveAdminModal user={user} />
          ) : (
            <MakeAdminModal user={user} />
          )}
          <DeleteUserModal user={user} />
        </div>
      );
    },
  },
];
