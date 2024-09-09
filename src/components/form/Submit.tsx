import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '../ui/button';

interface SubmitProps {
  children: ReactNode;
  className?: string;
}

export default function Submit({ children, className }: SubmitProps) {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <Button type="submit" disabled={isSubmitting} className={cn(className)}>
      {children}
    </Button>
  );
}
