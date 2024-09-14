import { PAYMENT_STATUS, RENTAL_STATUS } from '@/constants';
import { IBike } from './bike.interface';

export interface IRental {
  _id: string;
  userId: string;
  bikeId: IBike;
  txnId: string;
  finalTxnId: string;
  startTime: Date;
  returnTime: Date;
  totalCost: number;
  paidAmount: number;
  rentalStatus: keyof typeof RENTAL_STATUS;
  paymentStatus: keyof typeof PAYMENT_STATUS;
}
