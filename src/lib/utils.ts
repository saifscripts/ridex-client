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

  filtered.push(newValue);

  return filtered.join(',');
}
