import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

interface SidebarItemProps {
  to: string;
  isOpen: boolean;
  icon: ReactNode;
  children: ReactNode;
}

export default function DashboardItem({
  to,
  icon,
  isOpen,
  children,
}: SidebarItemProps) {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        cn(
          'flex gap-3 items-center px-2 py-1 rounded hover:text-primary text-lg',
          {
            'bg-primary text-white hover:text-white': isActive || isPending,
            'size-10 justify-center': !isOpen,
          }
        )
      }
    >
      {icon}
      <span className={cn({ 'opacity-0 hidden': !isOpen })}>{children}</span>
    </NavLink>
  );
}
