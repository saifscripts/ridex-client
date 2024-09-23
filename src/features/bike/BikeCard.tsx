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
import useScreenSize from '@/hooks/useScreenSize';
import { IBike } from '@/interfaces';
import { EyeIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function BikeCard({ bike, index }: { bike: IBike; index: number }) {
  const navigate = useNavigate();
  const [cardsInARow, setCardsInARow] = useState(1); // to generate animation delay for each card
  const screenSize = useScreenSize();

  // Set the number of cards in a row based on screen size
  useEffect(() => {
    if (screenSize.width >= 1400) {
      setCardsInARow(4);
    } else if (screenSize.width >= 1024) {
      setCardsInARow(3);
    } else if (screenSize.width >= 640) {
      setCardsInARow(2);
    } else {
      setCardsInARow(1);
    }
  }, [screenSize.width]);

  return (
    <Card
      className="overflow-hidden flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 ease-in-out cursor-pointer"
      data-aos="zoom-in"
      data-aos-delay={(index % cardsInARow) * 100}
      onClick={() => navigate(`/bike/${bike._id}`)}
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

      {/* View Details Button */}
      <CardFooter className="flex gap-2 justify-end">
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
