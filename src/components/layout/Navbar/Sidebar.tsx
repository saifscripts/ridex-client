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
import {
  Cross2Icon,
  EnterIcon,
  HamburgerMenuIcon,
  ImageIcon,
} from '@radix-ui/react-icons';
import Logo from './Logo';
import Logout from './Logout';
import navLinks from './navLinks';
import SidebarItem from './SidebarItem';

export default function Sidebar() {
  const isLoggedIn = useAppSelector((state) => state.auth.token);

  return (
    <Sheet>
      <SheetTrigger>
        <HamburgerMenuIcon className="size-6" />
      </SheetTrigger>
      <SheetContent className="w-[256px] flex flex-col justify-between">
        <SheetHeader className="text-left">
          <div className="flex items-center justify-between">
            <Logo />
            <SheetClose>
              <Cross2Icon className="text-3xl size-6 cursor-pointer border hover:bg-gray-100" />
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
                <SidebarItem icon={<EnterIcon />} to="/login">
                  Login
                </SidebarItem>
                <SidebarItem icon={<ImageIcon />} to="/signup">
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
