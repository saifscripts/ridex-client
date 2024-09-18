import texture from '@/assets/texture.png';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useGetMeQuery } from '@/redux/features/user/userApi';
import { MailIcon, MapPinIcon, PencilIcon, PhoneIcon } from 'lucide-react';

export default function ProfileHeader() {
  const { data: user } = useGetMeQuery('');

  return (
    <div className="bg-white rounded-lg p-1">
      <div
        className="h-24 lg:h-32 w-full bg-slate-700 rounded-lg text-white flex items-center justify-center relative p-6
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
        <div className="absolute left-4 top-3">
          <Avatar className="size-24 lg:size-32 ring-2 ring-white">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
          </Avatar>
          <PencilIcon
            size={24}
            className="absolute top-[5%] right-[5%] bg-white p-1 rounded-lg text-slate-700 z-20 cursor-pointer"
          />
        </div>
      </div>
      <div className="p-4">
        <h1 className="text-xl font-bold text-slate-700 mb-2">{user?.name}</h1>
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <p className="text-sm text-slate-500 flex items-center gap-2">
            <MailIcon className="size-4 inline-block" />
            {user?.email}
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-2">
            <PhoneIcon className="size-4 inline-block" />
            {user?.phone}
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-2">
            <MapPinIcon className="size-4 inline-block" />
            {user?.address}
          </p>
        </div>
      </div>
    </div>
  );
}
