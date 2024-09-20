import AppInput from '@/components/form/AppInput';
import AppPasswordInput from '@/components/form/AppPasswordInput';
import Submit from '@/components/form/Submit';
import AuthContainer from '@/features/auth/AuthContainer';
import { IResponse } from '@/interfaces';
import { showToast } from '@/lib/utils';
import { useSignupMutation } from '@/redux/features/auth/authApi';
import { UserPlusIcon } from 'lucide-react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
import { z } from 'zod';

const FormSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .min(1, 'Name cannot be an empty string'),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email address'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password must be at least 6 characters long'),
  phone: z
    .string({
      required_error: 'Phone number is required',
    })
    .refine((value) => validator.isMobilePhone(value, 'bn-BD'), {
      message: 'Invalid Bangladeshi phone number',
    }),
  address: z
    .string({
      required_error: 'Address is required',
    })
    .min(1, 'Address cannot be an empty string'),
});

export default function Signup() {
  const [signup] = useSignupMutation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const result = (await signup(data)) as IResponse<unknown>;
    showToast(result, 'Signup successful!');
    if (result?.data?.success) {
      navigate('/login');
    }
  };

  return (
    <AuthContainer
      title="Create Account"
      onSubmit={onSubmit}
      schema={FormSchema}
    >
      <AppInput
        name="name"
        placeholder="Enter your full name"
        label="Full Name"
      />
      <AppInput name="email" placeholder="Enter your email" label="Email" />
      <AppPasswordInput
        name="password"
        placeholder="Enter your password"
        label="Password"
      />
      <AppInput
        name="phone"
        type="number"
        placeholder="Enter Bangladeshi phone number"
        label="Phone"
      />
      <AppInput
        name="address"
        placeholder="Enter your address"
        label="Address"
      />

      <Submit className="w-full flex items-center gap-2">
        <UserPlusIcon size={16} />
        Signup
      </Submit>
    </AuthContainer>
  );
}
