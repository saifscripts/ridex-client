import { AppDateTimePicker } from '@/components/form/AppDateTimePicker';
import AppForm from '@/components/form/AppForm';
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
import { USER_ROLE } from '@/constants';
import { IBike } from '@/interfaces';
import { useCreateRentalMutation } from '@/redux/features/rental/rentalApi';
import moment from 'moment';
import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { z } from 'zod';

const FormSchema = z.object({
  startTime: z
    .date({ required_error: 'Start time is required' })
    .default(new Date())
    .transform((value) => {
      return moment(value).format();
    }),
});

const defaultValues = {
  startTime: new Date(),
};

interface RentNowModalProps {
  bike: IBike;
}

export function RentNowModal({ bike }: RentNowModalProps) {
  const [createRental] = useCreateRentalMutation();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data: FieldValues) {
    setIsLoading(true);
    data.bikeId = bike._id;
    const result = await createRental(data);
    if (result?.data?.success) {
      window.location.href = result?.data?.data?.payment_url;
    } else {
      setIsLoading(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-60" size="lg" disabled={!bike.isAvailable}>
          Rent Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <ProtectedRoute authorizedRoles={[USER_ROLE.ADMIN, USER_ROLE.USER]}>
          <DialogHeader>
            <DialogTitle>
              Rent {bike.brand} {bike.model} {bike.year}
            </DialogTitle>
            <DialogDescription>
              Select your rent start time and pay 100TK for confirmation!
            </DialogDescription>
          </DialogHeader>
          <AppForm
            onSubmit={onSubmit}
            schema={FormSchema}
            defaultValues={defaultValues}
          >
            <AppDateTimePicker name="startTime" label="Start Time" />
            <Submit disabled={isLoading} className="w-full">
              Pay 100 BDT
            </Submit>
          </AppForm>
        </ProtectedRoute>
      </DialogContent>
    </Dialog>
  );
}
