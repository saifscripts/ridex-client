import { generateSortString } from '@/lib/utils';
import { NavigateOptions, useSearchParams } from 'react-router-dom';

const uniqueFields = ['searchTerm', 'sort', 'limit', 'page', 'fields'];

const useAppSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const appendSearchParams = (
    params: Record<string, string>,
    options?: NavigateOptions
  ) => {
    const updatedSearchParams = new URLSearchParams(searchParams);

    Object.entries(params).forEach(([key, value]) => {
      const previousSortValue = updatedSearchParams.get('sort') || '';

      if (uniqueFields.includes(key)) {
        updatedSearchParams.delete(key);
      }

      if (key === 'sort') {
        return updatedSearchParams.append(
          'sort',
          generateSortString(previousSortValue, value)
        );
      }

      updatedSearchParams.append(key, value);
    });

    setSearchParams(updatedSearchParams, options);
  };

  const appendSearchParam = (
    param: { key: string; value: string },
    options?: NavigateOptions
  ) => {
    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.append(param.key, param.value);
    setSearchParams(updatedSearchParams, options);
  };

  const deleteSearchParam = (
    param: { key: string; value?: string },
    options?: NavigateOptions
  ) => {
    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.delete(param.key, param?.value);
    setSearchParams(updatedSearchParams);
    setSearchParams(updatedSearchParams, options);
  };

  const replaceSearchParam = (
    deletedParam: { key: string; value?: string },
    appendedParams: Record<string, string>,
    options?: NavigateOptions
  ) => {
    const updatedSearchParams = new URLSearchParams(searchParams);

    updatedSearchParams.delete(deletedParam.key, deletedParam?.value);

    Object.entries(appendedParams).forEach(([key, value]) => {
      if (uniqueFields.includes(key)) {
        updatedSearchParams.delete(key);
      }

      updatedSearchParams.append(key, value);
    });

    setSearchParams(updatedSearchParams);
    setSearchParams(updatedSearchParams, options);
  };

  return {
    searchParams,
    appendSearchParams,
    appendSearchParam,
    deleteSearchParam,
    replaceSearchParam,
    setSearchParams,
  };
};

export default useAppSearchParams;
