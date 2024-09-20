import useScreenSize from '@/hooks/useScreenSize';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
interface SidebarItemProps {
  href: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  icon: ReactNode;
  children: ReactNode;
}

export default function SidebarItem({
  href,
  icon,
  isOpen,
  setIsOpen,
  children,
}: SidebarItemProps) {
  const { pathname } = useLocation();
  const screenSize = useScreenSize();

  const hideSidebar = () => {
    if (screenSize.width <= 768) {
      setIsOpen(false);
    }
  };

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
      onClick={hideSidebar}
    >
      {icon}
      <span className={cn('text-nowrap', { 'opacity-0 hidden': !isOpen })}>
        {children}
      </span>
    </Link>
  );
}
