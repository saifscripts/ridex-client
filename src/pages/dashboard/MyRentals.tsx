import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PaidRentals, UnpaidRentals } from '@/features/rentals';
import { CreditCard, DollarSign } from 'lucide-react';

export default function MyRentals() {
  return (
    <div className="rounded-lg">
      <Tabs defaultValue="unpaid" className="w-full">
        <TabsList className="w-full max-w-96 h-12 p-2 border bg-background">
          <TabsTrigger
            value="unpaid"
            className="w-full max-w-48 py-2 shadow-none data-[state=active]:shadow-none text-foreground/70 data-[state=active]:text-foreground gap-1 data-[state=active]:bg-foreground/5"
          >
            <DollarSign className="size-5" />
            UNPAID
          </TabsTrigger>
          <TabsTrigger
            value="paid"
            className="w-full max-w-48 py-2 shadow-none data-[state=active]:shadow-none text-foreground/70  data-[state=active]:text-foreground gap-1 data-[state=active]:bg-foreground/5"
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
