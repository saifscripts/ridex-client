import { DataTable } from '@/features/table';
import { IUser } from '@/interfaces';
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

interface UserProps {
  data: IUser[];
  columns: ColumnDef<IUser>[];
  isLoading: boolean;
}

export default function UserData({ data, isLoading, columns }: UserProps) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="space-y-4">
      <DataTable columns={columns} table={table} isLoading={isLoading} />
    </div>
  );
}
