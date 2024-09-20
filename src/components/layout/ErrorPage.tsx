import AppError from '@/error/AppError';
import { HouseIcon, MoveLeftIcon } from 'lucide-react';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { Button } from '../ui/button';

export default function ErrorPage() {
  const error = useRouteError() as AppError;
  const navigate = useNavigate();

  return (
    <main className="h-screen flex flex-col justify-center items-center gap-4">
      <h1 className="font-bold text-7xl text-gray-800">
        {error?.status || 500}
      </h1>

      <h2 className="font-semibold text-3xl text-gray-600">
        {error?.statusText || 'Something Went Wrong!'}
      </h2>
      <div className="flex gap-4">
        <Button
          onClick={() => navigate(-1)}
          variant="outline"
          className="flex items-center gap-2"
        >
          <MoveLeftIcon size={16} />
          Go Back
        </Button>

        <Link to="/">
          <Button className="flex items-center gap-2">
            <HouseIcon size={16} />
            Go Home
          </Button>
        </Link>
      </div>
    </main>
  );
}
