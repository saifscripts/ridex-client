import AppForm from '@/components/form/AppForm';
import AppInput from '@/components/form/AppInput';
import Submit from '@/components/form/Submit';
import { IResponse, IUser } from '@/interfaces';
import { showToast } from '@/lib/utils';
import {
  useGetMeQuery,
  useUpdateMeMutation,
} from '@/redux/features/user/userApi';
import { SaveIcon } from 'lucide-react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
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

export default function EditProfile() {
  const { data: user } = useGetMeQuery('');
  const [updateProfile] = useUpdateMeMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const result = (await updateProfile(data)) as IResponse<IUser>;
    showToast(result, 'Profile updated successfully!');
    return result?.data?.success; // if returned true the form will be reset
  };

  return (
    <AppForm
      className="rounded-lg p-6 border"
      onSubmit={onSubmit}
      defaultValues={user}
      schema={FormSchema}
    >
      <h2 className="text-xl font-semibold text-foreground/80 mb-4">
        Edit Profile
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AppInput name="name" label="Name" placeholder="Your Name" />
        <AppInput name="email" label="Email" placeholder="Your Email" />
        <AppInput name="phone" label="Phone" placeholder="Your Phone" />
        <AppInput name="address" label="Address" placeholder="Your Address" />
      </div>

      <Submit className="flex items-center gap-2">
        <SaveIcon size={16} />
        Save Changes
      </Submit>
    </AppForm>
  );
}
