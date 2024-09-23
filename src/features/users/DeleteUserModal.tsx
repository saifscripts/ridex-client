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
import { useDeleteUserMutation } from '@/redux/features/user/userApi';
import { TrashIcon } from 'lucide-react';
import { useState } from 'react';

interface DeleteUserModalProps {
  user: IUser;
}

export default function DeleteUserModal({ user }: DeleteUserModalProps) {
  const [deleteUser] = useDeleteUserMutation();
  const [isLoading, setIsLoading] = useState(false);

  async function handleDelete() {
    setIsLoading(true);
    const result = (await deleteUser(user._id)) as IResponse<IUser>;
    showToast(result, 'User Deleted!');
    setIsLoading(false);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-foreground/20">
          <Tooltip>
            <TooltipTrigger>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-foreground/20"
              >
                <TrashIcon size={20} className="text-destructive" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delete user</p>
            </TooltipContent>
          </Tooltip>
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <ProtectedRoute authorizedRoles={[USER_ROLE.ADMIN, USER_ROLE.USER]}>
          <DialogHeader>
            <DialogTitle>Delete {user.name}?</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete <b>{user.name}</b>?
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="gap-2 sm:space-x-0">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              variant="destructive"
              disabled={isLoading}
              onClick={handleDelete}
            >
              Delete
            </Button>
          </DialogFooter>
        </ProtectedRoute>
      </DialogContent>
    </Dialog>
  );
}
