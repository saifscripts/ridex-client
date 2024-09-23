import { IResponse, IUser } from '@/interfaces';
import { showToast } from '@/lib/utils';
import { PencilIcon } from 'lucide-react';

interface IUploadAvatar {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  uploadAvatar: any;
  isLoading: boolean;
}

export default function UploadAvatar({
  uploadAvatar,
  isLoading,
}: IUploadAvatar) {
  const handleUploadAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('avatar', file);
      const result = (await uploadAvatar(formData)) as IResponse<IUser>;
      showToast(result, 'Image uploaded successfully!');
    }
  };

  return (
    <div className="absolute top-[5%] right-[5%] bg-background p-1 rounded-lg text-foreground/70 z-20 cursor-pointer">
      <PencilIcon size={16} className="text-foreground/70 cursor-pointer" />
      <input
        disabled={isLoading}
        type="file"
        name="avatar"
        accept="image/*"
        className="absolute inset-0 opacity-0 cursor-pointer"
        onChange={handleUploadAvatar}
      />
    </div>
  );
}
