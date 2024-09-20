import avatar from '@/assets/avatar.gif';
import texture from '@/assets/texture.png';
import {
  useGetMeQuery,
  useUploadAvatarMutation,
} from '@/redux/features/user/userApi';
import { Loader2Icon, MailIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import UploadAvatar from './UploadAvatar';

export default function ProfileHeader() {
  const { data: user } = useGetMeQuery('');
  const [uploadAvatar, { isLoading }] = useUploadAvatarMutation();

  return (
    <div className="bg-white rounded-lg p-1">
      <div
        className="h-24 lg:h-32 w-full bg-slate-900 rounded-lg text-white flex items-center justify-center relative p-6
         bg-cover bg-center"
        style={{
          backgroundImage: `url(${texture})`,
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold relative z-10 w-1/2 text-center hidden xs:block">
          WELCOME
          <br />
          <span className="capitalize text-primary">{user?.name}</span>
        </h1>
        <div
          className="absolute left-4 top-3 size-24 lg:size-32 ring-2 ring-white rounded-full bg-contain bg-center bg-gray-100"
          style={{
            backgroundImage: `url(${avatar})`,
          }}
        >
          <div
            className="absolute inset-0 size-24 lg:size-32 rounded-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${user?.avatarURL})`,
            }}
          ></div>
          <UploadAvatar uploadAvatar={uploadAvatar} isLoading={isLoading} />
          {isLoading && <Loader />}
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-xl font-bold text-slate-700 mb-2">{user?.name}</h1>
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <p className="text-sm text-slate-600 flex items-center gap-2">
            <MailIcon className="size-4 inline-block" />
            {user?.email}
          </p>
          <p className="text-sm text-slate-600 flex items-center gap-2">
            <PhoneIcon className="size-4 inline-block" />
            {user?.phone}
          </p>
          <p className="text-sm text-slate-600 flex items-center gap-2">
            <MapPinIcon className="size-4 inline-block" />
            {user?.address}
          </p>
        </div>
      </div>
    </div>
  );
}

function Loader() {
  return (
    <div className="absolute inset-0 bg-black opacity-50 rounded-full flex items-center justify-center z-10">
      <Loader2Icon className="size-6 animate-spin text-white" />
    </div>
  );
}
