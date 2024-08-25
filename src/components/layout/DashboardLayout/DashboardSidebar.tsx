import { cn } from '@/lib/utils';
import {
  AvatarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DashboardIcon,
  EnterIcon,
} from '@radix-ui/react-icons';
import DashboardItem from './DashboardItem';

interface DashboardSidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function DashboardSidebar({
  isOpen,
  toggleSidebar,
}: DashboardSidebarProps) {
  return (
    <div
      className={cn(
        'bg-white h-[calc(100vh-64px)] border-r py-4 transition-width duration-150 flex flex-col items-center relative',
        {
          'w-[256px] block px-4': isOpen,
          'w-16 sm:w-20': !isOpen,
        }
      )}
    >
      <div
        className={cn('flex flex-col gap-2', {
          //   'opacity-0': !isOpen,
        })}
      >
        <DashboardItem isOpen={isOpen} to="profile" icon={<AvatarIcon />}>
          Profile
        </DashboardItem>
        <DashboardItem isOpen={isOpen} to="bikes" icon={<EnterIcon />}>
          Bikes
        </DashboardItem>
        <DashboardItem isOpen={isOpen} to="bookings" icon={<DashboardIcon />}>
          Bookings
        </DashboardItem>
      </div>

      <div
        className="absolute z-10 top-10 left-full -translate-x-1/2 size-6 bg-white hover:text-primary hover:border-primary flex justify-center items-center cursor-pointer rounded-full border"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <ChevronLeftIcon className="size-4" />
        ) : (
          <ChevronRightIcon className="size-4" />
        )}
      </div>
    </div>
  );
}
