import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface NavItemProps {
  to: string;
  children: ReactNode;
}

const NavItem = ({ to, children }: NavItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        cn({
          'text-primary font-semibold': isActive || isPending,
        })
      }
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
