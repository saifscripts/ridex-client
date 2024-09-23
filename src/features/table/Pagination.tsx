import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import useAppSearchParams from '@/hooks/useAppSearchParams';
import { IMetaData } from '@/interfaces';

export default function Pagination({
  metaData,
  pageSizes = [10, 20, 30, 40, 50],
}: {
  metaData: IMetaData;
  pageSizes?: number[];
}) {
  const { searchParams, appendSearchParams } = useAppSearchParams();

  return (
    <div className="flex items-center justify-end sm:justify-between p-3 rounded-md border container">
      <div className="flex-1 text-sm text-muted-foreground hidden sm:block">
        Total Results: {metaData?.total}
      </div>

      <div className="flex items-center space-x-6 lg:space-x-8">
        {/* Rows per page */}
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium hidden xs:block">Rows per page</p>
          <Select
            value={searchParams.get('limit') || String(pageSizes[0])}
            onValueChange={(value) => {
              appendSearchParams(
                { limit: value, page: '1' },
                { replace: true }
              );
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue
                placeholder={searchParams.get('limit') || String(pageSizes[0])}
              />
            </SelectTrigger>
            <SelectContent side="top">
              {pageSizes.map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Current page number */}
        <div className="hidden mn:flex w-[100px] items-center justify-center text-sm font-medium">
          Page {metaData?.page} of {metaData?.totalPage}
        </div>

        {/* Pagination buttons */}
        <div className="flex items-center space-x-2">
          {/* Go to first page */}
          <Button
            variant="ghost"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => {
              appendSearchParams({ page: '1' }, { replace: true });
            }}
            disabled={metaData?.page === 1}
          >
            <span className="sr-only">Go to first page</span>
            <DoubleArrowLeftIcon className="h-4 w-4" />
          </Button>

          {/* Go to previous page */}
          <Button
            variant="ghost"
            className="h-8 w-8 p-0"
            onClick={() => {
              appendSearchParams(
                { page: String(metaData?.page - 1) },
                { replace: true }
              );
            }}
            disabled={metaData?.page === 1}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>

          {/* Page numbers */}
          {Array.from({ length: metaData?.totalPage }).map((_, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-8 w-8 p-0 hidden lg:flex"
              onClick={() => {
                appendSearchParams(
                  { page: String(index + 1) },
                  { replace: true }
                );
              }}
              disabled={index + 1 === metaData?.page}
            >
              <span className="sr-only">Page {index + 1}</span>
              {index + 1}
            </Button>
          ))}

          {/* Go to next page */}
          <Button
            variant="ghost"
            className="h-8 w-8 p-0"
            onClick={() => {
              appendSearchParams(
                { page: String(metaData?.page + 1) },
                { replace: true }
              );
            }}
            disabled={metaData?.page === metaData?.totalPage}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRightIcon className="h-4 w-4" />
          </Button>

          {/* Go to last page */}
          <Button
            variant="ghost"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => {
              appendSearchParams(
                { page: String(metaData?.totalPage) },
                { replace: true }
              );
            }}
            disabled={metaData?.page === metaData?.totalPage}
          >
            <span className="sr-only">Go to last page</span>
            <DoubleArrowRightIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
