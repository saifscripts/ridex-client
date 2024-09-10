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
import { IBike } from '@/interfaces';
import { useCreateBookingMutation } from '@/redux/features/booking/bookingApi';
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

interface BookNowModalProps {
  bike: IBike;
}

export function BookNowModal({ bike }: BookNowModalProps) {
  const [createBooking] = useCreateBookingMutation();
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data: FieldValues) {
    setIsLoading(true);
    data.bikeId = bike._id;
    const result = await createBooking(data);
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
          Book Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <ProtectedRoute>
          <DialogHeader>
            <DialogTitle>
              Rent {bike.brand} {bike.model} {bike.year}
            </DialogTitle>
            <DialogDescription>
              Select your booking start time and pay 100TK for confirmation!
            </DialogDescription>
          </DialogHeader>
          <AppForm
            onSubmit={onSubmit}
            schema={FormSchema}
            defaultValues={defaultValues}
          >
            <AppDateTimePicker name="startTime" label="Start Time" />
            <Submit disabled={isLoading} className="w-full">
              Pay Now (100 Tk)
            </Submit>
          </AppForm>
        </ProtectedRoute>
      </DialogContent>
    </Dialog>
  );
}
