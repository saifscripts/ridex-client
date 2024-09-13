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
import { useMakeAdminMutation } from '@/redux/features/user/userApi';
import { ShieldPlusIcon } from 'lucide-react';
import { useState } from 'react';

interface MakeAdminModalProps {
  user: IUser;
}

export default function MakeAdminModal({ user }: MakeAdminModalProps) {
  const [makeAdmin] = useMakeAdminMutation();
  const [isLoading, setIsLoading] = useState(false);

  async function handleMakeAdmin() {
    setIsLoading(true);
    const result = (await makeAdmin(user._id)) as IResponse<IUser>;
    showToast(result, `You made ${user.name} an admin!`);
    setIsLoading(false);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-gray-200">
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost" size="icon" className="hover:bg-gray-200">
                <ShieldPlusIcon className="size-5 text-green-600" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Make admin</p>
            </TooltipContent>
          </Tooltip>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <ProtectedRoute authorizedRoles={[USER_ROLE.ADMIN, USER_ROLE.USER]}>
          <DialogHeader>
            <DialogTitle>Make {user.name} an Admin?</DialogTitle>
            <DialogDescription>
              Are you sure you want to make <b>{user.name}</b> an Admin?
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
