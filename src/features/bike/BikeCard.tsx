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
import { EyeIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function BikeCard({ bike }: { bike: IBike }) {
  const navigate = useNavigate();

  return (
    <Card
      className="overflow-hidden flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 ease-in-out cursor-pointer"
      data-aos="fade-up"
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
            variant={bike.isAvailable ? 'success' : 'destructive'}
            className="absolute top-2 right-2"
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
        <Badge variant="secondary">{bike.pricePerHour} BDT/Hour</Badge>
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
      </CardFooter>
    </Card>
  );
}
