import { z } from 'zod';

import AppForm from '@/components/form/AppForm';
import AppInput from '@/components/form/AppInput';
import FormSkeleton from '@/components/form/FormSkeleton';
import { Button } from '@/components/ui/button';
import { IResponse, IUser } from '@/interfaces';
import { showToast } from '@/lib/utils';
import {
  useGetMeQuery,
  useUpdateMeMutation,
} from '@/redux/features/user/userApi';

const FormSchema = z.object({
  name: z.string().min(1, 'Name cannot be an empty string').optional(),
  email: z.string().email('Invalid email address').optional(),
  phone: z.string().optional(),
  address: z.string().min(1, 'Address cannot be an empty string').optional(),
});

export default function EditProfileInfo() {
  const { data: user, isLoading } = useGetMeQuery('');
  const [updateProfile] = useUpdateMeMutation();

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const result = (await updateProfile(data)) as IResponse<IUser>;
    showToast(result, 'Profile updated successfully!');
  }

  if (isLoading) return <FormSkeleton numberOfInputs={4} />;

  return (
    <div className="p-6 border rounded-lg">
      <h2 className="text-xl sm:text-xl font-bold text-center">Edit Profile</h2>

      <AppForm schema={FormSchema} defaultValues={user} onSubmit={onSubmit}>
        <AppInput name="name" label="Full Name" placeholder="Enter your name" />
        <AppInput name="email" label="Email" placeholder="Enter your email" />
        <AppInput
          name="phone"
          label="Phone"
          type="number"
          placeholder="Enter your phone number"
        />
        <AppInput
          name="address"
          label="Address"
          placeholder="Enter your address"
        />
        <Button type="submit" className="w-full">
          Save Changes
        </Button>
      </AppForm>
    </div>
  );
}
