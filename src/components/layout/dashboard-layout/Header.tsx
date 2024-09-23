import { ModeToggle } from '@/components/ui/mode-toggle';
import { Separator } from '@/components/ui/separator';
import { UserDropdown } from '@/features/user-dropdown';
import { cn } from '@/lib/utils';
import { MenuIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Header({ isOpen, setIsOpen }: HeaderProps) {
  return (
    <div className="h-[64px] bg-background flex items-center justify-between px-4 border-b">
      {/* Dashboard Header Content: Left */}
      <div className="flex items-center gap-2">
        {/* Sidebar Toggle Button */}
        <MenuIcon
          size={24}
          className="cursor-pointer m-1"
          onClick={() => setIsOpen(!isOpen)}
        />
        {/* Logo */}
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

      {/* Dashboard Header Content: Right */}
      <div className="flex items-center gap-2">
        <ModeToggle />
        <Separator orientation="vertical" className="h-8" />
        <UserDropdown />
      </div>
    </div>
  );
}
