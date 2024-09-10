import { IBike } from '@/interfaces';

export const PAYMENT_STATUS = {
  PAID: 'PAID',
  UNPAID: 'UNPAID',
} as const;

export const PaymentStatus = ['PAID', 'UNPAID'] as const;

export const RENTAL_STATUS = {
  PENDING: 'PENDING',
  ONGOING: 'ONGOING',
  RETURNED: 'RETURNED',
} as const;

export const RentalStatus = ['PENDING', 'ONGOING', 'RETURNED'] as const;

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
