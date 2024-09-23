import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { ZodSchema } from 'zod';

import { Form } from '@/components/ui/form';
import { cn, convertPropertiesToString } from '@/lib/utils';
import { ReactNode } from 'react';

interface AppFormProps {
  schema?: ZodSchema;
  children: ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  className?: string;
  defaultValues?: unknown;
}

export default function AppForm({
  schema,
  defaultValues,
  onSubmit,
  children,
  className,
  ...props
}: AppFormProps) {
  const form = useForm({
    resolver: schema && zodResolver(schema),
    defaultValues: convertPropertiesToString(
      defaultValues as Record<string, unknown>
    ),
  });

  // wrap submit handler to reset form if onSubmit returns true
  const submitHandler: SubmitHandler<FieldValues> = async (data) => {
    const shouldReset = await onSubmit(data);

    if (shouldReset) {
      form.reset();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className={cn('w-full space-y-6', className)}
        {...props}
      >
        {children}
      </form>
    </Form>
  );
}
