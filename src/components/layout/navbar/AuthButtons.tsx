import { Button } from '@/components/ui/button';
import { LogInIcon, UserPlusIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AuthButtons() {
  return (
    <>
      <Link to="/login">
        <Button variant="outline" className="flex items-center gap-2">
          <LogInIcon size={16} />
          Login
        </Button>
      </Link>
      <Link to="/signup">
        <Button className="flex items-center gap-2">
          <UserPlusIcon size={16} />
          Signup
        </Button>
      </Link>
    </>
  );
}
