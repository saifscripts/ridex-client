import ProtectedRoute from '@/components/layout/ProtectedRoute';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { USER_ROLE } from '@/constants';
import { IResponse, IUser } from '@/interfaces';
import { showToast } from '@/lib/utils';
import { useRemoveAdminMutation } from '@/redux/features/user/userApi';
import { ShieldXIcon } from 'lucide-react';
import { useState } from 'react';

interface RemoveAdminModalProps {
  user: IUser;
}

export default function RemoveAdminModal({ user }: RemoveAdminModalProps) {
  const [removeAdmin] = useRemoveAdminMutation();
  const [isLoading, setIsLoading] = useState(false);

  async function handleMakeAdmin() {
    setIsLoading(true);
    const result = (await removeAdmin(user._id)) as IResponse<IUser>;
    showToast(result, `You removed ${user.name} from admin!`);
    setIsLoading(false);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-gray-200">
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost" size="icon" className="hover:bg-gray-200">
                <ShieldXIcon size={20} className="text-destructive" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Remove admin</p>
            </TooltipContent>
          </Tooltip>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <ProtectedRoute authorizedRoles={[USER_ROLE.ADMIN, USER_ROLE.USER]}>
          <DialogHeader>
            <DialogTitle>Remove {user.name} from Admin?</DialogTitle>
            <DialogDescription>
              Are you sure you want to remove <b>{user.name}</b> from Admin?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:space-x-0">
            <DialogClose asChild>
              <Button variant="outline">No</Button>
            </DialogClose>
            <Button
              variant="destructive"
              disabled={isLoading}
              onClick={handleMakeAdmin}
            >
              Yes
            </Button>
          </DialogFooter>
        </ProtectedRoute>
      </DialogContent>
    </Dialog>
  );
}
