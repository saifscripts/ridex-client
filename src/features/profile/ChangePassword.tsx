import { z } from 'zod';

import AppForm from '@/components/form/AppForm';
import AppInput from '@/components/form/AppInput';
import Submit from '@/components/form/Submit';
import { IResponse } from '@/interfaces';
import { showToast } from '@/lib/utils';
import { useChangePasswordMutation } from '@/redux/features/auth/authApi';
import { LockIcon } from 'lucide-react';
import { FieldValues } from 'react-hook-form';

const FormSchema = z.object({
  currentPassword: z.string({
    required_error: 'Current password is required',
  }),
  newPassword: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, 'Password must be at least 6 characters long'),
});

const defaultValues = {
  currentPassword: '',
  newPassword: '',
};

export default function ChangePassword() {
  const [changePassword] = useChangePasswordMutation();

  async function onSubmit(data: FieldValues) {
    const result = (await changePassword(data)) as IResponse<null>;
    showToast(result, 'Password Updated!');
    return result?.data?.success; // if returned true the form will be reset
  }

  return (
    <div className="p-6 border rounded-lg">
      <h2 className="text-xl sm:text-xl font-bold text-center">
        Change Password
      </h2>

      <AppForm
        onSubmit={onSubmit}
        schema={FormSchema}
        defaultValues={defaultValues}
      >
        <AppInput
          name="currentPassword"
          label="Current Password"
          type="password"
          placeholder="Enter current password"
        />
        <AppInput
          name="newPassword"
          label="New Password"
          type="password"
          placeholder="Enter new password"
        />

        <Submit
          variant="destructive"
          className="w-full flex items-center gap-2"
        >
          <LockIcon size={16} />
          Change Password
        </Submit>
      </AppForm>
    </div>
  );
}
