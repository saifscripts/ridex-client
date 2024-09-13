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
import { IRental, RENTAL_STATUS, USER_ROLE } from '@/constants';
import { IResponse } from '@/interfaces';
import { showToast } from '@/lib/utils';
import { useReturnBikeMutation } from '@/redux/features/rental/rentalApi';
import moment from 'moment';
import { FieldValues } from 'react-hook-form';
import { z } from 'zod';
import { CalculatedInvoice } from './CalculatedInvoice';

const FormSchema = z.object({
  returnTime: z
    .date({ required_error: 'Return time is required' })
    .default(new Date())
    .transform((value) => {
      return moment(value).format();
    }),
});

interface CalculateModalProps {
  rental: IRental;
}

export function CalculateModal({ rental }: CalculateModalProps) {
  const [returnBike] = useReturnBikeMutation();

  async function onSubmit(data: FieldValues) {
    const options = {
      rentalId: rental._id,
      body: data,
    };
    const result = (await returnBike(options)) as IResponse<IRental>;
    showToast(result, 'Bike returned!');
  }

  const defaultValues = {
    startTime: rental.startTime,
    returnTime: new Date(),
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          disabled={rental?.rentalStatus === RENTAL_STATUS.RETURNED}
        >
          Calculate
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <ProtectedRoute authorizedRoles={[USER_ROLE.ADMIN, USER_ROLE.USER]}>
          <DialogHeader>
            <DialogTitle>Calculate Total Cost</DialogTitle>
            <DialogDescription>
              Select returned time to calculate cost and click on Return Bike to
              return the bike!
            </DialogDescription>
          </DialogHeader>
          <AppForm
            onSubmit={onSubmit}
            schema={FormSchema}
            defaultValues={defaultValues}
          >
            <AppDateTimePicker disabled name="startTime" label="Start Time" />
            <AppDateTimePicker name="returnTime" label="Return Time" />
            <CalculatedInvoice rental={rental} />
            <Submit className="w-full">Return bike</Submit>
          </AppForm>
        </ProtectedRoute>
      </DialogContent>
    </Dialog>
  );
}
