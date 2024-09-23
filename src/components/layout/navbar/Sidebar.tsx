import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useAppSelector } from '@/redux/hooks';

import { LogoutButton } from '@/features/logout';
import {
  LayoutDashboardIcon,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  UserPlusIcon,
  XIcon,
} from 'lucide-react';
import { useRef } from 'react';
import Logo from './Logo';
import navLinks from './navLinks';
import SidebarItem from './SidebarItem';

export default function Sidebar() {
  const user = useAppSelector((state) => state.auth.user);
  const closeRef = useRef<HTMLButtonElement>(null);

  const handleClose = () => {
    closeRef.current?.click();
  };

  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon size={24} className="cursor-pointer m-1" />
      </SheetTrigger>
      <SheetContent className="w-[256px] flex flex-col justify-between">
        <SheetHeader className="text-left">
          {/* Logo and Close Button */}
          <div className="flex items-center justify-between">
            <Logo />
            <SheetClose ref={closeRef}>
              <XIcon
                size={24}
                className="cursor-pointer border p-[2px] active:bg-foreground/10"
              />
            </SheetClose>
          </div>

          {/* Sidebar Items */}
          <div className="flex flex-col gap-2">
            <Separator className="my-2" />
            {navLinks.map((item) => (
              <SidebarItem
                key={item.path}
                icon={item.icon}
                to={item.path}
                onClick={handleClose}
              >
                {item.text}
              </SidebarItem>
            ))}

            {/* Sidebar Items: Based on User Authentication */}
            {user ? (
              <>
                <SidebarItem
                  icon={<LayoutDashboardIcon size={20} />}
                  to="/dashboard"
                  onClick={handleClose}
                >
                  Dashboard
                </SidebarItem>
              </>
            ) : (
              <>
                <SidebarItem
                  icon={<LogInIcon size={20} />}
                  to="/login"
                  onClick={handleClose}
                >
                  Login
                </SidebarItem>
                <SidebarItem
                  icon={<UserPlusIcon size={20} />}
                  to="/signup"
                  onClick={handleClose}
                >
                  Signup
                </SidebarItem>
              </>
            )}
            <Separator className="my-2" />
          </div>
        </SheetHeader>

        {/* Logout Button */}
        <SheetFooter className="sm:flex-col-reverse">
          {user && (
            <LogoutButton
              className="justify-start gap-3 px-2 py-1 text-base"
              variant="secondary"
              onClick={handleClose}
            >
              <LogOutIcon size={20} />
              <span>Logout</span>
            </LogoutButton>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
