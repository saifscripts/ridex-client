import { IResponse } from '@/interfaces';
import { type ClassValue, clsx } from 'clsx';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * The function showToast displays a success message with a given title or an error message from the
 * response data.
 */
export function showToast(result: IResponse<unknown>, title?: string) {
  if (result?.error) {
    toast.error(result?.error?.data?.message);
  } else {
    toast.success(title || result?.data?.message);
  }
}

/**
 * The function `generateParams` takes a queryParams object, converts its values to strings, and
 * returns a  URLSearchParams object.
 */
export function generateParams(queryParams: URLSearchParams) {
  const params = new URLSearchParams();

  if (queryParams) {
    queryParams.forEach(([key, value]) => params.append(key, value.toString()));
  }

  return params;
}

/**
 * The function `generateSortString` takes two strings, removes duplicate values, and returns a new
 * string with the new value added.
 * Example:
 * generateSortString('name,-age', 'name') => 'name,-age'
 * generateSortString('name,-age', 'age') => 'age,-name'
 */
export function generateSortString(sortString: string, newSortValue: string) {
  const sortValues = sortString.split(',');

  // Remove duplicate values and filter out the new value if it already exists
  const filteredSortValues = sortValues.filter((item) => {
    const itemWithoutPrefix = item.startsWith('-') ? item.substring(1) : item;

    const newValueWithoutPrefix = newSortValue.startsWith('-')
      ? newSortValue.substring(1)
      : newSortValue;

    return itemWithoutPrefix !== newValueWithoutPrefix && Boolean(item);
  });

  filteredSortValues.unshift(newSortValue);

  return filteredSortValues.join(',');
}

/**
 * The function `convertPropertiesToString` converts all number properties of an object to strings, including
 * nested objects.
 */
export function convertPropertiesToString(obj?: Record<string, unknown>) {
  if (!obj) return {};

  const result: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'number') {
      result[key] = String(value);
    } else if (
      typeof value === 'object' &&
      value !== null &&
      !(value instanceof Date)
    ) {
      result[key] = convertPropertiesToString(value as Record<string, unknown>);
    } else {
      result[key] = value;
    }
  }

  return result;
}
