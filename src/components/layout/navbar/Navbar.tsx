import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { UserDropdown } from '@/features/user-dropdown';
import { cn } from '@/lib/utils';
import { useGetMeQuery } from '@/redux/features/user/userApi';
import { LogInIcon, UserPlusIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import NavItem from './NavItem';
import navLinks from './navLinks';
import Sidebar from './Sidebar';

const Navbar = () => {
  const { data: user } = useGetMeQuery('');

  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);

  return (
    <div
      className={cn(
        'fixed w-full h-[64px] border-b flex justify-between items-center px-6 transition-top duration-300 z-50 bg-white',
        {
          'top-0': visible,
          'top-[-64px]': !visible,
        }
      )}
    >
      <Logo />
      <div className="hidden md:flex gap-8">
        {navLinks.map((item) => (
          <NavItem key={item.path} to={item.path}>
            {item.text}
          </NavItem>
        ))}
      </div>
      <div className="hidden md:flex gap-2 items-center">
        {user ? (
          <UserDropdown />
        ) : (
          <>
            <Separator orientation="vertical" className="h-10" />
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
        )}
      </div>
      <div className="flex gap-2 items-center md:hidden">
        {user && <UserDropdown />}
        <Sidebar />
      </div>
    </div>
  );
};

export default Navbar;
