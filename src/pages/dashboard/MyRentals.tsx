import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PaidRentals, UnpaidRentals } from '@/features/rentals';
import { CreditCard, DollarSign } from 'lucide-react';

export default function MyRentals() {
  return (
    <div className="rounded-lg bg-white">
      <Tabs defaultValue="unpaid" className="w-full">
        <TabsList className="w-full max-w-96 h-12 p-2 bg-white">
          <TabsTrigger
            value="unpaid"
            className="w-full max-w-48 py-2 rounded-bl-none rounded-br-none shadow-none data-[state=active]:shadow-none border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-yellow-50 gap-1"
          >
            <DollarSign className="size-5" />
            UNPAID
          </TabsTrigger>
          <TabsTrigger
            value="paid"
            className="w-full max-w-48 py-2 rounded-bl-none rounded-br-none shadow-none data-[state=active]:shadow-none border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:bg-yellow-50 gap-2"
          >
            <CreditCard className="size-5" />
            PAID
          </TabsTrigger>
        </TabsList>
        <TabsContent value="unpaid">
          <UnpaidRentals />
        </TabsContent>
        <TabsContent value="paid">
          <PaidRentals />
        </TabsContent>
      </Tabs>
    </div>
  );
}
