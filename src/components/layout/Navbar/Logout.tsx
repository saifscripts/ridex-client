import { Button } from '@/components/ui/button';
import { logout } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { ExitIcon } from '@radix-ui/react-icons';

export default function Logout() {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Button
      onClick={handleLogout}
      className="text-primary-foreground gap-1"
      variant="link"
    >
      <ExitIcon />
      <span>Logout</span>
    </Button>
  );
}
