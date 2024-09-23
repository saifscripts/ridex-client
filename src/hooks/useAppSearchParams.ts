import { generateSortString } from '@/lib/utils';
import { NavigateOptions, useSearchParams } from 'react-router-dom';

const spacialFields = ['searchTerm', 'sort', 'limit', 'page', 'fields'];

const useAppSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  /**
   * The `appendSearchParams` function updates URL search parameters with the provided key-value pairs,
   * handling special cases for sorting and unique fields.
   */
  const appendSearchParams = (
    params: Record<string, string>,
    options?: NavigateOptions
  ) => {
    // Create a new URLSearchParams object with the current search parameters
    const currentSearchParams = new URLSearchParams(searchParams);

    // Iterate over each key-value pair in the provided parameters
    Object.entries(params).forEach(([key, value]) => {
      // If the key is a special field, delete it from the search parameters
      if (spacialFields.includes(key)) {
        currentSearchParams.delete(key);
      }

      // Get the previous sort value from the search parameters
      const previousSortValue = currentSearchParams.get('sort') || '';

      // If the key is 'sort', generate a new sort string using the previous sort value and append it to the search parameters
      if (key === 'sort') {
        return currentSearchParams.append(
          'sort',
          generateSortString(previousSortValue, value)
        );
      }

      // Append the key-value pair to the current search parameters
      currentSearchParams.append(key, value);
    });

    setSearchParams(currentSearchParams, options);
  };

  /**
   * The `appendSearchParam` function appends a single key-value pair to the current search parameters.
   */
  const appendSearchParam = (
    param: { key: string; value: string },
    options?: NavigateOptions
  ) => {
    const currentSearchParams = new URLSearchParams(searchParams);
    currentSearchParams.append(param.key, param.value);
    setSearchParams(currentSearchParams, options);
  };

  /**
   * The `deleteSearchParam` function deletes a key-value pair from the current search parameters.
   */
  const deleteSearchParam = (
    param: { key: string; value?: string },
    options?: NavigateOptions
  ) => {
    const currentSearchParams = new URLSearchParams(searchParams);
    currentSearchParams.delete(param.key, param?.value);
    setSearchParams(currentSearchParams, options);
  };

  /**
   * The `replaceSearchParam` function replaces a key-value pair in the current search parameters.
   */
  const replaceSearchParam = (
    deletedParam: { key: string; value?: string },
    appendedParams: Record<string, string>,
    options?: NavigateOptions
  ) => {
    const currentSearchParams = new URLSearchParams(searchParams);

    // Delete the key-value pair from the search parameters
    currentSearchParams.delete(deletedParam.key, deletedParam?.value);

    // Append the new key-value pairs to the search parameters
    Object.entries(appendedParams).forEach(([key, value]) => {
      // If the key is a special field, delete it from the search parameters first
      if (spacialFields.includes(key)) {
        currentSearchParams.delete(key);
      }

      // Append the key-value pair to the search parameters
      currentSearchParams.append(key, value);
    });

    setSearchParams(currentSearchParams, options);
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
