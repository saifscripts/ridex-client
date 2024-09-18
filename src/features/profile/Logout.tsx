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
    <section className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Logout</h2>
      <p className="text-gray-600 mb-4">
        Are you sure you want to log out of your account?
      </p>
      <Button
        onClick={handleLogout}
        variant="destructive"
        className="flex items-center gap-2"
      >
        <LogOutIcon size={16} />
        Confirm Logout
      </Button>
    </section>
  );
}
