import AppForm from '@/components/form/AppForm';
import Container from '@/components/layout/Container';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { ZodType } from 'zod';

interface IAuthContainerProps {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
  title: string;
  schema: ZodType;
}

export default function AuthContainer({
  children,
  onSubmit,
  title,
  schema,
}: IAuthContainerProps) {
  return (
    <Container className="min-h-[calc(100svh-64px)] flex justify-center items-center py-4">
      <AppForm
        className="max-w-md w-full border p-6 rounded-xl bg-white space-y-6"
        onSubmit={onSubmit}
        schema={schema}
      >
        <h1 className="text-3xl font-semibold text-center">{title}</h1>
        {children}
      </AppForm>
    </Container>
  );
}
