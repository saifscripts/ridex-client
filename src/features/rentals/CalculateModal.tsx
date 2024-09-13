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
import moment from 'moment';
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

interface CalculateModalProps {
  rental: IRental;
}

export function CalculateModal({ rental }: CalculateModalProps) {
  //   const [createRental] = useCreateRentalMutation();
  //   const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(data: FieldValues) {
    // setIsLoading(true);
    // data.bikeId = bike._id;
    // const result = await createRental(data);
    // if (result?.data?.success) {
    //   window.location.href = result?.data?.data?.payment_url;
    // } else {
    //   setIsLoading(false);
    // }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="w-60"
          size="lg"
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
            <AppDateTimePicker name="startTime" label="Start Time" />
            <Submit disabled={true} className="w-full">
              Return bike
            </Submit>
          </AppForm>
        </ProtectedRoute>
      </DialogContent>
    </Dialog>
  );
}
