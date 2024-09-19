import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { IBike } from '@/interfaces';
import { cn } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function BikeCard({ bike }: { bike: IBike }) {
  const navigate = useNavigate();

  return (
    <Card
      className="overflow-hidden flex flex-col justify-between hover:scale-[1.01] transition-transform duration-150 ease-in-out cursor-pointer"
      onClick={() => navigate(`/bike/${bike._id}`)}
    >
      <CardHeader>
        <div className="relative mb-4">
          <div
            className="w-full h-48 bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: `url(${bike.imageURL})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-label={`${bike.name} ${bike.model} ${bike.year}`}
          ></div>
          <Badge
            className={cn('absolute top-0 left-0', {
              'bg-green-100 text-green-700 hover:bg-green-100 hover:text-green-700':
                bike.isAvailable,
              'bg-red-100 text-destructive hover:bg-red-100 hover:text-destructive':
                !bike.isAvailable,
            })}
          >
            {bike.isAvailable ? 'Available' : 'Unavailable'}
          </Badge>
        </div>
        <CardTitle>
          {bike.brand} {bike.model} {bike.year}
        </CardTitle>
        <CardDescription>{bike.description}</CardDescription>
      </CardHeader>

      <CardFooter className="flex gap-2 justify-between">
        <Badge variant="outline">{bike.pricePerHour} BDT/Hour</Badge>
        <Link to={`/bike/${bike._id}`}>
          <Button variant="secondary" className="flex items-center gap-2">
            <EyeIcon size={16} />
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
