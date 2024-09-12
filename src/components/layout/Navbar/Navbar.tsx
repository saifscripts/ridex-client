import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useAppSelector } from '@/redux/hooks';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Logout from './Logout';
import NavItem from './NavItem';
import navLinks from './navLinks';
import Sidebar from './Sidebar';

const Navbar = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.token);
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className="h-16 border-b flex justify-between items-center px-6">
      <Logo />
      <div className="hidden md:flex gap-8">
        {navLinks.map((item) => (
          <NavItem key={item.path} to={item.path}>
            {item.text}
          </NavItem>
        ))}
      </div>
      <div className="hidden md:flex gap-2 items-center">
        {isLoggedIn ? (
          <>
            <p>{user?.role}</p>
            <Logout />
          </>
        ) : (
          <>
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Separator orientation="vertical" className="h-10" />
            <Link to="/signup">
              <Button className="text-gray-900">Signup</Button>
            </Link>
          </>
        )}
      </div>
      <div className="md:hidden">
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;
