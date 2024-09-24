import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { IBike } from '@/interfaces';
import { cn } from '@/lib/utils';
import { toggleSelectedBike } from '@/redux/features/comparison/comparisonSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { EyeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BikeCard({ bike }: { bike: IBike }) {
  const dispatch = useAppDispatch();
  const isComparing = useAppSelector((state) => state.comparison.isComparing);
  const selectedBikes = useAppSelector(
    (state) => state.comparison.selectedBikes
  );
  const isSelected = selectedBikes.some((b) => b._id === bike._id);

  return (
    <Card
      className={cn(
        'overflow-hidden flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 ease-in-out',
        {
          'border-primary dark:border-foreground bg-primary/5 dark:bg-foreground/5':
            isSelected,
          'hover:bg-primary/5 dark:hover:bg-foreground/5 cursor-pointer':
            isComparing,
        }
      )}
      onClick={() => {
        if (isComparing) {
          dispatch(toggleSelectedBike(bike));
        }
      }}
    >
      <CardHeader>
        {/* Image */}
        <div
          className="w-full h-48 bg-cover bg-center rounded-lg mb-4"
          style={{
            backgroundImage: `url(${bike.imageURL})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-label={`${bike.name} ${bike.model} ${bike.year}`}
        />
        {/* Bike Details */}
        <CardTitle>
          {bike.brand} {bike.model} {bike.year}
        </CardTitle>
        <CardDescription>{bike.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{bike.pricePerHour} BDT/Hour</Badge>
          <Badge variant={bike.isAvailable ? 'success' : 'destructive'}>
            {bike.isAvailable ? 'Available' : 'Unavailable'}
          </Badge>
        </div>
      </CardContent>

      {/* Action Buttons */}
      <CardFooter className="flex gap-2 justify-end">
        {/* add a checkbox for select bike when isComparing is true */}
        {isComparing ? (
          <div className="flex items-center gap-2">
            <Checkbox checked={isSelected} />
            <label className="text-sm font-medium cursor-pointer">
              {isSelected ? 'Selected to Compare' : 'Select to Compare'}
            </label>
          </div>
        ) : (
          <Link to={`/bike/${bike._id}`}>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <EyeIcon size={16} />
              View Details
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
