import Container from '@/components/layout/Container';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useAppSelector } from '@/redux/hooks';
import { EyeIcon, LayersIcon } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function CompareBikesModal() {
  const dialogTriggerRef = useRef<HTMLButtonElement>(null);
  const selectedBikes = useAppSelector(
    (state) => state.comparison.selectedBikes
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button ref={dialogTriggerRef} className="gap-2">
          <LayersIcon size={16} className="-rotate-90" />
          <span className="hidden mn:inline">
            Compare <span className="hidden sm:inline">Selected</span>
          </span>
        </Button>
      </DialogTrigger>

      <DialogContent className="w-[100svw] max-w-full h-[100svh]">
        <Container className="flex gap-4 overflow-auto mt-4 hide-scrollbar">
          {selectedBikes.map((bike) => (
            <Card
              key={bike._id}
              className="basis-1/4 h-fit flex flex-col justify-between"
            >
              <CardHeader>
                {/* Bike Title */}
                <CardTitle className="text-xl font-semibold mb-4">
                  {bike.brand} {bike.model}
                </CardTitle>

                {/* Bike Image */}
                <div
                  className="w-full h-48 bg-cover bg-center rounded-lg mb-4"
                  style={{
                    backgroundImage: `url(${bike.imageURL})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  aria-label={`${bike.name} ${bike.model}`}
                />
              </CardHeader>

              {/* Bike Details */}
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Feature</TableHead>
                      <TableHead>Value</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableHead>Price</TableHead>
                      <TableCell>{bike.pricePerHour} BDT/Hour</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHead>Brand</TableHead>
                      <TableCell>{bike.brand}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHead>Model</TableHead>
                      <TableCell>{bike.model}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHead>Year</TableHead>
                      <TableCell>{bike.year}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHead>CC</TableHead>
                      <TableCell>{bike.cc}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableHead>Availability</TableHead>
                      <TableCell>
                        {bike.isAvailable ? 'Available' : 'Unavailable'}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>

              {/* View Details Button */}
              <CardFooter>
                <Link to={`/bike/${bike._id}`} className="w-full">
                  <Button variant="secondary" className="gap-2 w-full">
                    <EyeIcon size={16} />
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </Container>
      </DialogContent>
    </Dialog>
  );
}
