import { DataTable } from '@/features/table';
import { IRental } from '@/interfaces';
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

  return <DataTable columns={columns} table={table} isLoading={isLoading} />;
}
