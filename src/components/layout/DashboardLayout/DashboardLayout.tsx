import useScreenSize from '@/hooks/useScreenSize';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../Navbar';
import DashboardSidebar from './DashboardSidebar';

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

  return (
    <>
      <Navbar />
      <div className={cn('flex h-[calc(100vh-64px)]')}>
        <DashboardSidebar
          toggleSidebar={toggleSidebar}
          isOpen={isSidebarOpen}
        />
        <div className="bg-secondary p-6 w-full h-[calc(100vh-64px)] overflow-y-scroll">
          <Outlet />
        </div>
      </div>
    </>
  );
}
