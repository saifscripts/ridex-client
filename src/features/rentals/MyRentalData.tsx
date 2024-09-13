import { IRental } from '@/constants';
import { DataTable } from '@/features/table';
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

interface MyRentalProps {
  data: IRental[];
  columns: ColumnDef<IRental>[];
  isLoading: boolean;
}

export default function MyRentalData({
  data,
  isLoading,
  columns,
}: MyRentalProps) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="space-y-4 container my-4">
      <DataTable columns={columns} table={table} isLoading={isLoading} />
    </div>
  );
}
