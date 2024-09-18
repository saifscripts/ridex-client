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
      className="bg-white shadow rounded-lg p-6"
      onSubmit={onSubmit}
      defaultValues={user}
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Edit Profile</h2>
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
