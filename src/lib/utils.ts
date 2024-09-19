import { toast } from '@/components/ui/use-toast';
import { IResponse } from '@/interfaces';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function showToast(result: IResponse<unknown>, title: string) {
  if (result?.error) {
    toast({
      title: result?.error?.data?.message,
      variant: 'destructive',
    });
  } else {
    toast({ title });
  }
}

export function generateParams(queryParams: URLSearchParams) {
  const params = new URLSearchParams();

  if (queryParams) {
    queryParams.forEach(([key, value]) => params.append(key, value.toString()));
  }

  return params;
}

export function generateSortString(previousString: string, newValue: string) {
  const array = previousString.split(',');

  const filtered = array.filter((item) => {
    const _item = item.startsWith('-') ? item.substring(1) : item;
    const _value = newValue.startsWith('-') ? newValue.substring(1) : newValue;
    return _item !== _value && Boolean(item);
  });

  filtered.unshift(newValue);

  return filtered.join(',');
}

export function convertPropertiesToString(
  obj: Record<string, string | number>
) {
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(obj)) {
    // Convert all property values to string
    result[key] = String(value);
  }

  return result;
}

// convert object's number fields to string any nested level
export function convertNumberFields(obj?: Record<string, unknown>) {
  if (!obj) return {};

  const result: Record<string, string | Record<string, unknown>> = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null) {
      result[key] = convertNumberFields(value as Record<string, unknown>);
    } else {
      result[key] = String(value);
    }
  }

  return result;
}
