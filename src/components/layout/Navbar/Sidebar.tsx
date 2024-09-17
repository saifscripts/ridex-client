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

import { LogInIcon, MenuIcon, UserPlusIcon, XIcon } from 'lucide-react';
import Logo from './Logo';
import Logout from './Logout';
import navLinks from './navLinks';
import SidebarItem from './SidebarItem';

export default function Sidebar() {
  const isLoggedIn = useAppSelector((state) => state.auth.token);

  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon size={24} />
      </SheetTrigger>
      <SheetContent className="w-[256px] flex flex-col justify-between">
        <SheetHeader className="text-left">
          <div className="flex items-center justify-between">
            <Logo />
            <SheetClose>
              <XIcon
                size={24}
                className="cursor-pointer border p-[2px] active:bg-gray-100"
              />
            </SheetClose>
          </div>
          <Separator className="mt-2 mb-4" />

          <div className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <SidebarItem key={item.path} icon={item.icon} to={item.path}>
                {item.text}
              </SidebarItem>
            ))}

            {!isLoggedIn && (
              <>
                <SidebarItem icon={<LogInIcon size={20} />} to="/login">
                  Login
                </SidebarItem>
                <SidebarItem icon={<UserPlusIcon size={20} />} to="/signup">
                  Signup
                </SidebarItem>
              </>
            )}
          </div>
        </SheetHeader>
        <SheetFooter className="flex-row justify-end">
          {isLoggedIn && <Logout />}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
