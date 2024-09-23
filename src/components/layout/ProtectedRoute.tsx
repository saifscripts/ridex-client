import AppError from '@/error/AppError';
import { IUserRole } from '@/interfaces';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

export default function ProtectedRoute({
  children,
  authorizedRoles,
}: {
  children: ReactNode;
  authorizedRoles: IUserRole[];
}) {
  const user = useAppSelector((state) => state.auth.user);
  const { pathname } = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ pathname }} replace={true} />;
  }

  if (!authorizedRoles.includes(user?.role)) {
    throw new AppError(403, 'Unauthorized Access!');
  }

  return children;
}
