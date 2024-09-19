import AppFileInput from '@/components/form/AppFileInput';
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
import { bikeBrandOptions, USER_ROLE } from '@/constants';
import { IBike, IResponse } from '@/interfaces';
import { showToast } from '@/lib/utils';
import { isNormalNumber, isPositiveNumber, isValidYear } from '@/lib/validate';
import { useCreateBikeMutation } from '@/redux/features/bike/bikeApi';
import { PlusCircleIcon } from 'lucide-react';
import { useRef, useState } from 'react';
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
  image: z
    .any()
    .refine((files) => files && files.length > 0, 'Image is required')
    .transform(() => {}),
});

export default function CreateBikeModal() {
  const [createBike] = useCreateBikeMutation();
  const dialogTriggerRef = useRef<HTMLButtonElement>(null);
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  async function onSubmit(data: FieldValues) {
    const formData = new FormData();
    formData.append('data', JSON.stringify(data));
    formData.append('image', image as File);

    const result = (await createBike(formData)) as IResponse<IBike>;
    showToast(result, 'New Bike Bike Added!');

    if (result.data?.success) {
      (dialogTriggerRef.current as HTMLButtonElement).click();
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button ref={dialogTriggerRef} className="ml-auto flex">
          <PlusCircleIcon size={16} className="mn:mr-2" />
          <span className="hidden mn:inline">Add Bike</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <ProtectedRoute authorizedRoles={[USER_ROLE.ADMIN, USER_ROLE.USER]}>
          <DialogHeader>
            <DialogTitle>Add New Bike</DialogTitle>
            <DialogDescription>
              Add a new the bike with proper information!
            </DialogDescription>
          </DialogHeader>
          <AppForm onSubmit={onSubmit} schema={FormSchema}>
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
            <AppFileInput
              name="image"
              label="Image"
              placeholder="Enter bike image"
              accept="image/*"
              onChange={handleImageChange}
            />
            <Submit className="w-full flex items-center gap-2">
              <PlusCircleIcon size={16} />
              Add New Bike
            </Submit>
          </AppForm>
        </ProtectedRoute>
      </DialogContent>
    </Dialog>
  );
}
