import AppInput from '@/components/form/AppInput';
import AppPasswordInput from '@/components/form/AppPasswordInput';
import Submit from '@/components/form/Submit';
import { AuthContainer } from '@/features/auth';
import { IResponse } from '@/interfaces';
import { showToast } from '@/lib/utils';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { setUser } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { LogInIcon } from 'lucide-react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { z } from 'zod';

const FormSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email address'),
  password: z.string({
    required_error: 'Password is required',
  }),
});

export default function Login() {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();

  const onSubmit: SubmitHandler<FieldValues> = async (credentials) => {
    const result = (await login(credentials)) as IResponse<unknown>;
    showToast(result, 'Login successful!');

    if (result?.data?.success) {
      const { token } = result.data;
      await dispatch(setUser(token));
      navigate(state?.pathname || '/dashboard');
    }
  };

  const defaultValues = {
    email: 'admin@ridex.com',
    password: '123456',
  };

  return (
    <AuthContainer
      title="Login"
      defaultValues={defaultValues}
      onSubmit={onSubmit}
      schema={FormSchema}
    >
      <AppInput name="email" placeholder="Enter your email" label="Email" />
      <AppPasswordInput
        name="password"
        placeholder="Enter your password"
        label="Password"
      />
      <Submit className="w-full flex items-center gap-2">
        <LogInIcon size={16} />
        Login
      </Submit>
    </AuthContainer>
  );
}
