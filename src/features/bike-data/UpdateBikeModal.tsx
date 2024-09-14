import AppForm from '@/components/form/AppForm';
import AppInput from '@/components/form/AppInput';
import AppSelect from '@/components/form/AppSelect';
import AppTextarea from '@/components/form/AppTextarea';
import Submit from '@/components/form/Submit';
import ProtectedRoute from '@/components/layout/ProtectedRoute';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { bikeBrandOptions, USER_ROLE } from '@/constants';
import { IBike, IResponse } from '@/interfaces';
import { showToast } from '@/lib/utils';
import { isNormalNumber, isPositiveNumber, isValidYear } from '@/lib/validate';
import { useUpdateBikeMutation } from '@/redux/features/bike/bikeApi';
import { FilePenLineIcon } from 'lucide-react';
import { FieldValues } from 'react-hook-form';
import { z } from 'zod';

const FormSchema = z.object({
  name: z.string().min(1, 'Name cannot be an empty string'),
  description: z.string().min(1, 'Description cannot be an empty string'),
  pricePerHour: z
    .string({ required_error: 'Price/Hour is required' })
    .refine(isPositiveNumber, { message: 'Price should be a positive number' })
    .transform((value) => Number(value)),
  cc: z
    .string({ required_error: 'CC is required' })
    .refine(isNormalNumber, { message: 'CC must be a positive number' })
    .transform((value) => Number(value)),
  year: z
    .string({ required_error: 'Year is required' })
    .refine(isValidYear, { message: 'Invalid year' })
    .transform((value) => Number(value)),
  model: z.string().min(1, 'Model cannot be an empty string'),
  brand: z.string().min(1, 'Brand cannot be an empty string'),
});

interface UpdateBikeModalProps {
  bike: IBike;
}

export default function UpdateBikeModal({ bike }: UpdateBikeModalProps) {
  const [updateBike] = useUpdateBikeMutation();
  async function onSubmit(data: FieldValues) {
    const options = {
      id: bike._id,
      body: data,
    };
    const result = (await updateBike(options)) as IResponse<IBike>;
    showToast(result, 'Bike Updated!');
    return result?.data?.success; // if returned true the form will be reset
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-gray-200">
          <Tooltip>
            <TooltipTrigger>
              <Button variant="ghost" size="icon" className="hover:bg-gray-200">
                <FilePenLineIcon className="size-5 text-blue-400" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Update bike</p>
            </TooltipContent>
          </Tooltip>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <ProtectedRoute authorizedRoles={[USER_ROLE.ADMIN, USER_ROLE.USER]}>
          <DialogHeader>
            <DialogTitle>
              Update {bike.brand} {bike.model} {bike.year}
            </DialogTitle>
            <DialogDescription>
              Update the bike with proper information!
            </DialogDescription>
          </DialogHeader>
          <AppForm onSubmit={onSubmit} schema={FormSchema} defaultValues={bike}>
            <AppInput name="name" label="Name" placeholder="Enter bike name" />
            <AppTextarea
              name="description"
              label="Description"
              placeholder="Enter bike description"
            />
            <AppInput
              name="pricePerHour"
              label="Price/Hour"
              type="number"
              placeholder="Enter price/hour"
            />
            <AppSelect
              name="brand"
              label="Brand"
              placeholder="Select a brand"
              options={bikeBrandOptions}
            />
            <AppInput
              name="model"
              label="Model"
              placeholder="Enter bike modal"
            />
            <AppInput
              name="year"
              label="Year"
              type="number"
              placeholder="Enter bike year"
            />
            <AppInput
              name="cc"
              label="CC"
              type="number"
              placeholder="Enter bike CC"
            />
            <Submit className="w-full">Update</Submit>
          </AppForm>
        </ProtectedRoute>
      </DialogContent>
    </Dialog>
  );
}
