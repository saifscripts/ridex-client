import { z } from 'zod';

import AppForm from '@/components/form/AppForm';
import AppPasswordInput from '@/components/form/AppPasswordInput';
import Submit from '@/components/form/Submit';
import { IResponse } from '@/interfaces';
import { showToast } from '@/lib/utils';
import { useChangePasswordMutation } from '@/redux/features/auth/authApi';
import { LockIcon } from 'lucide-react';
import { FieldValues } from 'react-hook-form';

const FormSchema = z.object({
  currentPassword: z
    .string({
      required_error: 'Current password is required',
    })
    .min(1, 'Current password is required'),
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
    <AppForm
      onSubmit={onSubmit}
      schema={FormSchema}
      defaultValues={defaultValues}
      className="rounded-lg p-6 border"
    >
      <h2 className="text-xl font-semibold text-foreground/80 mb-4">
        Change Password
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AppPasswordInput
          name="currentPassword"
          label="Current Password"
          placeholder="Enter current password"
        />
        <AppPasswordInput
          name="newPassword"
          label="New Password"
          placeholder="Enter new password"
        />
      </div>

      <Submit className="flex items-center gap-2">
        <LockIcon size={16} />
        Change Password
      </Submit>
    </AppForm>
  );
}
