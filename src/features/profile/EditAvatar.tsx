import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { IUser } from '@/interfaces';

export default function EditAvatar({ user }: { user?: IUser }) {
  return (
    <div className="flex gap-6 items-center p-6 border rounded-lg">
      <Avatar className="size-32">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="font-bold text-3xl uppercase mb-1">{user?.name}</h3>
        <h4 className="mb-3">{user?.email}</h4>
      </div>
    </div>
  );
}
