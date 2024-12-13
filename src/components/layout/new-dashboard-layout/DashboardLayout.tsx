import { SidebarProvider } from '@/components/ui/sidebar';
import { useAppSelector } from '@/redux/hooks';
import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function DashboardLayout() {
  //   const [isOpen, setIsOpen] = useState(false);
  //   const screenSize = useScreenSize();
  const user = useAppSelector((state) => state.auth.user);
  const childRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // open sidebar on desktop
  //   useEffect(() => {
  //     if (screenSize.width > 768) {
  //       setIsOpen(true);
  //     }
  //   }, [screenSize.width]);

  // stop scrolling on body (fix for chrome)
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // scroll to top on path change
  useEffect(() => {
    childRef.current?.scrollTo(0, 0);
  }, [location.pathname]);

  if (!user) return;

  return (
    <SidebarProvider>
      <Sidebar />
      <main className="w-full">
        <Header />
        <div className="p-4" ref={childRef}>
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
