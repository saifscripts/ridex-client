import { Button, ButtonProps } from '@/components/ui/button';
import { baseApi } from '@/redux/api/baseApi';
import { logout } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { useNavigate } from 'react-router-dom';

interface LogoutProps {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  onClick?: () => void;
}

export default function LogoutButton({
  children,
  className,
  variant,
  size,
  onClick,
}: LogoutProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(baseApi.util.resetApiState());
    navigate('/login');
    if (onClick) {
      onClick();
    }
  };

  return (
    <Button
      onClick={handleLogout}
      className={className}
      variant={variant}
      size={size}
    >
      {children}
    </Button>
  );
}
