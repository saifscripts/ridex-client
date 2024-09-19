import { Button, ButtonProps } from '@/components/ui/button';
import { baseApi } from '@/redux/api/baseApi';
import { logout } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { useNavigate } from 'react-router-dom';

interface LogoutProps {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonProps['variant'];
}

export default function LogoutButton({
  children,
  className,
  variant,
}: LogoutProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(baseApi.util.resetApiState());
    navigate('/login');
  };

  return (
    <Button onClick={handleLogout} className={className} variant={variant}>
      {children}
    </Button>
  );
}
