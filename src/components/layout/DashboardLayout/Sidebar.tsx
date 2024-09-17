import { cn } from '@/lib/utils';
import { useAppSelector } from '@/redux/hooks';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { ISidebarItem } from './interfaces';
import SidebarItem from './SidebarItem';
import sidebarLinks from './sidebarLinks';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const user = useAppSelector((state) => state.auth.user);

  if (!user) return;

  return (
    <div
      className={cn(
        'bg-white h-full border-r py-4 transition-width duration-150 flex flex-col items-center relative',
        {
          'w-[256px] px-4': isOpen,
          'w-16 sm:w-20': !isOpen,
        }
      )}
    >
      <div
        className={cn('flex flex-col gap-2', {
          //   'opacity-0': !isOpen,
        })}
      >
        {sidebarLinks[user?.role].map((item: ISidebarItem) => (
          <SidebarItem
            key={item.href}
            href={item.href}
            isOpen={isOpen}
            icon={item.icon}
          >
            {item.text}
          </SidebarItem>
        ))}
      </div>

      <div
        className="absolute z-10 top-10 left-full -translate-x-1/2 size-6 bg-white hover:text-primary hover:border-primary flex justify-center items-center cursor-pointer rounded-full border"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <ChevronLeftIcon size={16} />
        ) : (
          <ChevronRightIcon size={16} />
        )}
      </div>
    </div>
  );
}
