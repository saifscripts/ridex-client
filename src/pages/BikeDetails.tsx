import Container from '@/components/layout/Container';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { RentNowModal } from '@/features/rentals';
import { useGetSingleBikeQuery } from '@/redux/features/bike/bikeApi';
import { useParams } from 'react-router-dom';
import bikeImg from '../assets/bike.jpg';

export default function BikeDetails() {
  const { bikeId } = useParams();
  const { data, isLoading } = useGetSingleBikeQuery(bikeId);

  const bikeData = data?.data;

  if (isLoading) return <p>Loading...</p>;

  return (
    <Container className="min-h-[calc(100vh-64px)] sm:flex items-center justify-center py-4">
      <div className="bg-white border w-full rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 sm:p-8 lg:p-16">
        <div>
          <img
            src={bikeImg}
            alt={`${bikeData.name} ${bikeData.model} ${bikeData.year}`}
            className="w-[80%] block m-auto"
          />
        </div>
        <div className="flex justify-center items-center relative">
          <div className="w-full">
            <Badge
              variant={bikeData?.isAvailable ? 'success' : 'destructive'}
              className="absolute top-2 right-2"
            >
              {bikeData?.isAvailable ? 'Available' : 'Unavailable'}
            </Badge>
            <h1 className="font-semibold text-4xl md:text-5xl text-gray-700 mb-4">
              {bikeData?.name}
            </h1>
            <p className="xs:text-xl text-gray-600 mb-4">
              {bikeData.description}
            </p>

            <Badge variant="outline" className="xs:text-lg">
              {bikeData?.pricePerHour} BDT/Hour
            </Badge>

            <Table className="my-8">
              <TableBody>
                <TableRow>
                  <TableCell>Brand</TableCell>
                  <TableCell>{bikeData.brand}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Model</TableCell>
                  <TableCell>{bikeData.model}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Year</TableCell>
                  <TableCell>{bikeData.year}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>CC</TableCell>
                  <TableCell>{bikeData.cc}</TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <div className="text-center lg:text-left">
              <RentNowModal bike={bikeData} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
