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

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
  ascLabel?: string;
  dscLabel?: string;
}

export default function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
  ascLabel,
  dscLabel,
}: DataTableColumnHeaderProps<TData, TValue>) {
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
          <DropdownMenuItem onClick={() => column.toggleVisibility(false)}>
            <EyeNoneIcon className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" />
            Hide
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
