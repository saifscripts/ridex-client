import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

export default function PublicRoute({ children }: { children: ReactNode }) {
  const { token } = useAppSelector((state) => state.auth);

  if (token) {
    return <Navigate to="/" />;
  }

  return children;
}
