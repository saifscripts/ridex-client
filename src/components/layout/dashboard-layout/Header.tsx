import { UserDropdown } from '@/features/user-dropdown';
import { cn } from '@/lib/utils';
import { useAppSelector } from '@/redux/hooks';
import { MenuIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Header({ isOpen, setIsOpen }: HeaderProps) {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <div className="h-[64px] bg-white flex items-center justify-between px-4 border-b">
      <div className="flex items-center gap-2">
        <MenuIcon
          size={24}
          className="cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        />
        <Link
          to="/"
          className={cn('md:hidden', {
            hidden: isOpen,
          })}
        >
          <h1 className="text-4xl font-bold font-leckerli text-center">
            <span className="text-primary">RIDE</span>X
          </h1>
        </Link>
      </div>
      {user && <UserDropdown />}
    </div>
  );
}
