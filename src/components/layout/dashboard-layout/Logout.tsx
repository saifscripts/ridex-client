import { Button } from '@/components/ui/button';
import { logout } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { LogOutIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Logout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <Button
      onClick={handleLogout}
      className="text-primary-foreground gap-1"
      variant="link"
    >
      <LogOutIcon size={20} />
      <span>Logout</span>
    </Button>
  );
}
