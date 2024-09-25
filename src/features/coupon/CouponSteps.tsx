import {
  ChevronsRight,
  CopyIcon,
  CreditCardIcon,
  LoaderPinwheel,
} from 'lucide-react';

export default function CouponSteps() {
  return (
    <div className="mb-8">
      <div className="flex justify-center items-center gap-4">
        <div className="flex flex-col sm:flex-row gap-2 items-center">
          <LoaderPinwheel className="text-blue-600 size-6" />
          <h3 className="text-base sm:text-lg font-semibold text-center">
            Spin the Wheel
          </h3>
        </div>
        <ChevronsRight className="text-primary size-6" />
        <div className="flex flex-col sm:flex-row gap-2 items-center">
          <CopyIcon className="text-green-600 size-6" />
          <h3 className="text-base sm:text-lg font-semibold text-center">
            Copy the Code
          </h3>
        </div>
        <ChevronsRight className="text-primary size-6" />
        <div className="flex flex-col sm:flex-row gap-2 items-center">
          <CreditCardIcon className="text-purple-600 size-6" />
          <h3 className="text-base sm:text-lg font-semibold text-center">
            Apply at Checkout
          </h3>
        </div>
      </div>
    </div>
  );
}
