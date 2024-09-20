import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarItemProps {
  href: string;
  isOpen: boolean;
  icon: ReactNode;
  children: ReactNode;
}

export default function SidebarItem({
  href,
  icon,
  isOpen,
  children,
}: SidebarItemProps) {
  const { pathname } = useLocation();

  return (
    <Link
      to={href}
      className={cn(
        'flex gap-2 items-center px-2 py-1 rounded hover:bg-primary/20 text-lg',
        {
          'bg-primary hover:bg-primary/80': pathname === href,
          'size-10 justify-center opacity-0 sm:opacity-100': !isOpen,
        }
      )}
    >
      {icon}
      <span className={cn('text-nowrap', { 'opacity-0 hidden': !isOpen })}>
        {children}
      </span>
    </Link>
  );
}
