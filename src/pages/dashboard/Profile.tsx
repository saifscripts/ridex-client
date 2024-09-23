import {
  ChangePassword,
  EditProfile,
  Logout,
  ProfileHeader,
  ProfileSkeleton,
  ProfileTabs,
} from '@/features/profile';
import { useGetMeQuery } from '@/redux/features/user/userApi';
import { useState } from 'react';

export default function Profile() {
  const { data: user } = useGetMeQuery('');
  const [activeTab, setActiveTab] = useState('edit');

  if (!user) return <ProfileSkeleton />;

  return (
    <div className="space-y-4">
      <ProfileHeader />
      <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="mt-4">
        {activeTab === 'edit' && <EditProfile />}
        {activeTab === 'account' && <ChangePassword />}
        {activeTab === 'logout' && <Logout />}
      </div>
    </div>
  );
}
