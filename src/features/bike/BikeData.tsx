import { IBike } from '@/interfaces';

import { Button } from '@/components/ui/button';
import { bikeAvailabilityOptions, bikeBrandOptions } from '@/constants';
import {
  CheckboxFilter,
  Pagination,
  RadioButtonFilter,
} from '@/features/table/';
import { IMetaData } from '@/interfaces';
import { cn } from '@/lib/utils';
import {
  clearSelectedBikes,
  setIsComparing,
} from '@/redux/features/comparison/comparisonSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { BikeIcon, LayersIcon, SearchCheckIcon, XIcon } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import ActiveFilters from './ActiveFilters';
import BikeCards from './BikeCards';
import { columns } from './columns';
import CompareBikesModal from './CompareBikesModal';
import SearchInput from './SearchInput';

interface BikeDataProps {
  data: IBike[];
  meta: IMetaData;
  isLoading: boolean;
}

export default function BikeData({ data, meta, isLoading }: BikeDataProps) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="space-y-4">
      <FilterOptions />
      <ActiveFilters />
      <BikeCards table={table} isLoading={isLoading} />
      <Pagination metaData={meta} pageSizes={[12, 24, 48]} />
    </div>
  );
}

function FilterOptions() {
  const dispatch = useAppDispatch();
  const isComparing = useAppSelector((state) => state.comparison.isComparing);
  const selectedBikes = useAppSelector(
    (state) => state.comparison.selectedBikes
  );

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-4 p-3 bg-background border rounded-md">
      {/* Filter Options */}
      <div className="flex items-center gap-2 w-full lg:w-auto">
        <SearchInput />
        <CheckboxFilter columnId="brand" filters={bikeBrandOptions}>
          <BikeIcon size={16} />
          <span className="hidden sm:inline">Brand</span>
        </CheckboxFilter>
        <RadioButtonFilter
          columnId={'isAvailable'}
          filters={bikeAvailabilityOptions}
        >
          <SearchCheckIcon size={16} />
          <span className="hidden sm:inline">Availability</span>
        </RadioButtonFilter>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-end gap-2 w-full lg:w-auto">
        {/* Selected Bikes */}
        {isComparing && (
          <span className="text-sm text-muted-foreground">
            {selectedBikes.length} bike{selectedBikes.length > 1 ? 's' : ''}{' '}
            selected
          </span>
        )}

        {/* Cancel Button */}
        {isComparing && (
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => {
              dispatch(clearSelectedBikes());
              dispatch(setIsComparing(false));
            }}
          >
            <XIcon size={16} />
            <span className="hidden mn:inline">Cancel</span>
          </Button>
        )}
        {/* Compare Button */}
        {selectedBikes.length < 2 ? (
          <Button
            disabled={isComparing}
            className="gap-2"
            onClick={() => {
              dispatch(setIsComparing(true));
              toast.info('Please select 2-4 bikes to compare');
            }}
          >
            <LayersIcon size={16} className="-rotate-90" />
            <span className={cn('mn:inline', { hidden: isComparing })}>
              Compare <span className="hidden sm:inline">Bikes</span>
            </span>
          </Button>
        ) : (
          <CompareBikesModal />
        )}
      </div>
    </div>
  );
}
