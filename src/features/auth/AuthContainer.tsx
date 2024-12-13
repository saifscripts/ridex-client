import AppForm from '@/components/form/AppForm';
import Container from '@/components/layout/Container';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { ZodType } from 'zod';

interface IAuthContainerProps {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  title: string;
  schema: ZodType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValues?: any;
}

export default function AuthContainer({
  children,
  onSubmit,
  title,
  schema,
  defaultValues,
}: IAuthContainerProps) {
  return (
    <Container className="min-h-[calc(100svh-64px)] flex justify-center items-center py-4">
      <AppForm
        className="max-w-md w-full border p-6 rounded-xl bg-background space-y-6"
        onSubmit={onSubmit}
        schema={schema}
        data-aos="fade-left"
        data-aos-delay="100"
        defaultValues={defaultValues}
      >
        <h1 className="text-3xl font-semibold text-center">{title}</h1>
        {children}
      </AppForm>
    </Container>
  );
}
