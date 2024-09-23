import { Skeleton } from '@/components/ui/skeleton';
import { TableBody, TableCell, TableRow } from '@/components/ui/table';

export default function TableSkeleton({ colSpan }: { colSpan: number }) {
  return (
    <TableBody>
      <TableRow>
        <TableCell colSpan={colSpan} className="h-8 text-center">
          <Skeleton className="h-8 w-full" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={colSpan} className="h-8 text-center">
          <Skeleton className="h-8 w-full" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={colSpan} className="h-8 text-center">
          <Skeleton className="h-8 w-full" />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell colSpan={colSpan} className="h-8 text-center">
          <Skeleton className="h-8 w-full" />
        </TableCell>
      </TableRow>
    </TableBody>
  );
}
