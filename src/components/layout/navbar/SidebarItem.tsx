import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarItemProps {
  to: string;
  icon: ReactNode;
  children: ReactNode;
}

const SidebarItem = ({ to, icon, children }: SidebarItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        cn(
          'flex gap-3 items-center px-2 py-1 rounded hover:text-primary text-lg',
          {
            'bg-primary text-white hover:text-white': isActive || isPending,
          }
        )
      }
    >
      {icon}
      {children}
    </NavLink>
  );
};

export default SidebarItem;
