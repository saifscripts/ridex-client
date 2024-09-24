import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import { Button } from '../ui/button';

interface SubmitProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined;
}

export default function Submit({
  children,
  className,
  disabled,
  variant,
  size,
}: SubmitProps) {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <Button
      type="submit"
      disabled={disabled || isSubmitting}
      className={cn(className)}
      variant={variant}
      size={size}
    >
      {children}
    </Button>
  );
}
