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
      return (
        <div className="flex justify-end">
          <RemoveAdminModal user={row.original} />
          <MakeAdminModal user={row.original} />
          <DeleteUserModal user={row.original} />
        </div>
      );
    },
  },
];
