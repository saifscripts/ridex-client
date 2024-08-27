import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { token } = useAppSelector((state) => state.auth);

  const { pathname } = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ pathname }} replace={true} />;
  }

  return children;
}
