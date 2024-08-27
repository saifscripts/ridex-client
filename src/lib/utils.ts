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
