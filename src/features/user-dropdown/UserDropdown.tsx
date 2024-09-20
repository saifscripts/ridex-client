import avatar from '@/assets/avatar.gif';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { USER_ROLE } from '@/constants';
import { useGetMeQuery } from '@/redux/features/user/userApi';
import {
  BikeIcon,
  ChevronDownIcon,
  LayoutDashboardIcon,
  ListTreeIcon,
  LogOutIcon,
  SquareChartGanttIcon,
  UserPenIcon,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { LogoutButton } from '../logout';

export default function UserDropdown() {
  const { data: user } = useGetMeQuery('');
  const navigate = useNavigate();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2 hover:bg-gray-200 rounded-full px-1 md:px-2 py-1 cursor-pointer transition-colors duration-300">
          <Avatar>
            <AvatarImage src={user?.avatarURL || avatar} />
            <AvatarFallback>
              {user?.name?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="hidden md:block">
            <p className="font-medium">{user?.name}</p>
            <p className="text-muted-foreground text-[12px] tracking-tighter">
              {user?.email.split('@')[0]}
            </p>
          </div>
          <ChevronDownIcon size={16} className="hidden md:block" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuItem
          className="cursor-pointer text-foreground text-base gap-2"
          onClick={() => {
            navigate('/dashboard');
          }}
        >
          <LayoutDashboardIcon size={16} />
          Dashboard
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer text-foreground text-base gap-2"
          onClick={() => {
            navigate('/dashboard');
          }}
        >
          <UserPenIcon size={16} />
          Profile
        </DropdownMenuItem>
        {user?.role === USER_ROLE.USER && (
          <DropdownMenuItem
            className="cursor-pointer text-foreground text-base gap-2"
            onClick={() => {
              navigate('/dashboard/my-rentals');
            }}
          >
            <ListTreeIcon size={16} />
            My Rentals
          </DropdownMenuItem>
        )}
        {user?.role === USER_ROLE.ADMIN && (
          <DropdownMenuItem
            className="cursor-pointer text-foreground text-base gap-2"
            onClick={() => {
              navigate('/dashboard/manage-bikes');
            }}
          >
            <BikeIcon size={16} />
            Manage Bikes
          </DropdownMenuItem>
        )}
        {user?.role === USER_ROLE.ADMIN && (
          <DropdownMenuItem
            className="cursor-pointer text-foreground text-base gap-2"
            onClick={() => {
              navigate('/dashboard/manage-rentals');
            }}
          >
            <SquareChartGanttIcon size={16} />
            Manage Rentals
          </DropdownMenuItem>
        )}
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-foreground text-base cursor-pointer p-0">
          <LogoutButton
            variant="ghost"
            className="px-2 py-1.5 justify-start gap-2 w-full"
          >
            <LogOutIcon size={16} />
            <span>Logout</span>
          </LogoutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}