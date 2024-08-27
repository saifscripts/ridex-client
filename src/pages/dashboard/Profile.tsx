import { Separator } from '@/components/ui/separator';
import {
  ChangePassword,
  EditAvatar,
  EditProfileInfo,
} from '@/features/profile';
import { useGetMeQuery } from '@/redux/features/user/userApi';

export default function Profile() {
  const { data: user } = useGetMeQuery('');

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg h-full border">
        <h1 className="text-xl sm:text-2xl font-bold text-center">
          Welcome, {user?.name}
        </h1>
        <Separator className="my-6" />

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <EditAvatar user={user} />
            <ChangePassword />
          </div>
          <EditProfileInfo />
        </div>
      </div>
    </div>
  );
}
