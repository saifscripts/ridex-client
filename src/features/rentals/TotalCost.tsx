import { useWatch } from 'react-hook-form';
import { calculateTotalCost } from './utils';

interface TotalCostProps {
  pricePerHour: number;
}

export default function TotalCost({ pricePerHour }: TotalCostProps) {
  const { startTime, returnTime } = useWatch();
  const totalCost = calculateTotalCost(startTime, returnTime, pricePerHour);

  return (
    <div className="w-full border relative">
      <p className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-1 font-semibold text-slate-500">
        Total Cost
      </p>
      <p className="p-4 text-center text-green-900 text-2xl">{totalCost} BDT</p>
    </div>
  );
}
