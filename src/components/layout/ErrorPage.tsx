import AppError from '@/error/AppError';
import { Link, useNavigate, useRouteError } from 'react-router-dom';
import { Button } from '../ui/button';

export default function ErrorPage() {
  const error = useRouteError() as AppError;
  const navigate = useNavigate();

  return (
    <main className="h-screen flex flex-col justify-center items-center gap-4">
      {error?.statusCode && (
        <h1 className="font-bold text-7xl text-slate-700">
          {error.statusCode}
        </h1>
      )}
      <h2 className="font-semibold text-3xl text-slate-400">{error.message}</h2>
      <div className="space-x-4">
        <Button onClick={() => navigate(-1)} variant="outline">
          Go Back
        </Button>

        <Link to="/">
          <Button>Go Home</Button>
        </Link>
      </div>
    </main>
  );
}
