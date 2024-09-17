import AppForm from '@/components/form/AppForm';
import Submit from '@/components/form/Submit';
import { useInitiateRemainingPaymentMutation } from '@/redux/features/rental/rentalApi';
import React, { useState } from 'react';

interface PayButtonProps {
  children: React.ReactNode;
  rentalId: string;
  disabled: boolean;
}

export default function PayButton({
  children,
  rentalId,
  disabled,
}: PayButtonProps) {
  const [initiatePayment] = useInitiateRemainingPaymentMutation();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);
    const result = await initiatePayment(rentalId);
    if (result?.data?.success) {
      window.location.href = result?.data?.data?.payment_url;
    } else {
      setIsLoading(false);
    }
  };

  return (
    <AppForm onSubmit={onSubmit}>
      <Submit
        disabled={disabled || isLoading}
        className="min-w-[120px] w-full flex items-center gap-2"
      >
        {children}
      </Submit>
    </AppForm>
  );
}
