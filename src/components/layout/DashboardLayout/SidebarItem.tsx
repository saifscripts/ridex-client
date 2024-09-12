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
        'flex gap-3 items-center px-2 py-1 rounded hover:text-primary text-lg',
        {
          'bg-primary text-white hover:text-white': pathname === href,
          'size-10 justify-center': !isOpen,
        }
      )}
    >
      {icon}
      <span className={cn({ 'opacity-0 hidden': !isOpen })}>{children}</span>
    </Link>
  );
}
