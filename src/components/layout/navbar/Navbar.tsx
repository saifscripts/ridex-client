import { ModeToggle } from '@/components/ui/mode-toggle';
import { Separator } from '@/components/ui/separator';
import { UserDropdown } from '@/features/user-dropdown';
import { cn } from '@/lib/utils';
import { useAppSelector } from '@/redux/hooks';
import { useEffect, useState } from 'react';
import AuthButtons from './AuthButtons';
import Logo from './Logo';
import NavItem from './NavItem';
import navLinks from './navLinks';
import Sidebar from './Sidebar';

const Navbar = () => {
  const user = useAppSelector((state) => state.auth.user);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // Hide navbar on scroll down and show on scroll up
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
        'fixed w-full h-[64px] border-b transition-top duration-300 z-50 bg-background',
        {
          'top-0': visible,
          'top-[-64px]': !visible,
        }
      )}
    >
      <div className="container h-full flex justify-between items-center">
        {/* Navbar Content: Left */}
        <Logo />

        {/* Navbar Content: Center (Desktop) */}
        <div className="hidden md:flex gap-8 justify-center items-center basis-1/3">
          {navLinks.map((item) => (
            <NavItem key={item.path} to={item.path}>
              {item.text}
            </NavItem>
          ))}
        </div>

        {/* Navbar Content: Right (Desktop) */}
        <div className="hidden md:flex gap-2 justify-end items-center basis-1/3">
          <ModeToggle />
          <Separator orientation="vertical" className="h-8" />
          {user ? <UserDropdown /> : <AuthButtons />}
        </div>

        {/* Navbar Content: Right (Mobile) */}
        <div className="flex gap-2 items-center justify-end md:hidden basis-1/3">
          <ModeToggle />
          {user && <UserDropdown />}
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
