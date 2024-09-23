import {
  ArrowDownIcon,
  ArrowUpIcon,
  CaretSortIcon,
  EyeNoneIcon,
} from '@radix-ui/react-icons';
import { Column } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import useAppSearchParams from '@/hooks/useAppSearchParams';
import { cn } from '@/lib/utils';

interface ColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
  ascLabel?: string;
  dscLabel?: string;
}

// ColumnHeader component provides a header for a table column with sorting and visibility toggle options
export default function ColumnHeader<TData, TValue>({
  column,
  title,
  className,
  ascLabel,
  dscLabel,
}: ColumnHeaderProps<TData, TValue>) {
  const { searchParams, appendSearchParams } = useAppSearchParams();

  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 data-[state=open]:bg-accent"
          >
            <span>{title}</span>
            {/* Display sorting icons based on the current sorting state */}
            {searchParams.get('sort')?.includes(`-${column.id}`) ? (
              <ArrowDownIcon className="ml-2 h-4 w-4" />
            ) : searchParams.get('sort')?.includes(`${column.id}`) ? (
              <ArrowUpIcon className="ml-2 h-4 w-4" />
            ) : (
              <CaretSortIcon className="ml-2 h-4 w-4" />
            )}
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="start">
          {/* Sort in ascending order (Add column id to the sort query parameter) */}
          <DropdownMenuItem
            onClick={() => {
              appendSearchParams(
                { sort: column.id, page: '1' },
                { replace: true }
              );
            }}
          >
            <ArrowUpIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            {ascLabel || 'Asc'}
          </DropdownMenuItem>

          {/* Sort in descending order (Add column id with a '-' prefix to the sort query parameter) */}
          <DropdownMenuItem
            onClick={() => {
              appendSearchParams(
                { sort: `-${column.id}`, page: '1' },
                { replace: true }
              );
            }}
          >
            <ArrowDownIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            {dscLabel || 'Desc'}
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          {/* Hide column */}
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <EyeNoneIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
