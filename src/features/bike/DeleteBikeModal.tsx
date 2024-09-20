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
import { IBike, IResponse } from '@/interfaces';
import { showToast } from '@/lib/utils';
import { useDeleteBikeMutation } from '@/redux/features/bike/bikeApi';
import { TrashIcon } from 'lucide-react';
import { useState } from 'react';

interface DeleteBikeModalProps {
  bike: IBike;
}

export default function DeleteBikeModal({ bike }: DeleteBikeModalProps) {
  const [deleteBike] = useDeleteBikeMutation();
  const [isLoading, setIsLoading] = useState(false);

  async function handleDelete() {
    setIsLoading(true);
    const result = (await deleteBike(bike._id)) as IResponse<IBike>;
    showToast(result, 'Bike Deleted!');
    setIsLoading(false);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-gray-200">
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost" size="icon" className="hover:bg-gray-200">
                <TrashIcon size={20} className="text-destructive" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Delete bike</p>
            </TooltipContent>
          </Tooltip>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <ProtectedRoute authorizedRoles={[USER_ROLE.ADMIN, USER_ROLE.USER]}>
          <DialogHeader>
            <DialogTitle>
              Delete {bike.brand} {bike.model} {bike.year}
            </DialogTitle>
            <DialogDescription>
              Are you sure you want to delete{' '}
              <b>
                {bike.brand} {bike.model} {bike.year}
              </b>
              ?
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
