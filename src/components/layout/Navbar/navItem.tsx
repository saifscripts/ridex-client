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
        isPending ? 'text-primary' : isActive ? 'text-primary' : ''
      }
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
