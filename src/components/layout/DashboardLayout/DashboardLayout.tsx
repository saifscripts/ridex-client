import useScreenSize from '@/hooks/useScreenSize';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar';
import Sidebar from './Sidebar';

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const screenSize = useScreenSize();

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (screenSize.width < 1024) {
      setIsSidebarOpen(false);
    }
  }, [screenSize]);

  // stop scrolling on body (fix for chrome)
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className={cn('flex h-[calc(100vh-64px)] mt-[64px]')}>
        <Sidebar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
        <div className="bg-secondary w-full h-full overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </>
  );
}
