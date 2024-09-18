import useScreenSize from '@/hooks/useScreenSize';
import { useAppSelector } from '@/redux/hooks';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

export default function DashboardLayout() {
  const [isOpen, setIsOpen] = useState(false);
  const screenSize = useScreenSize();
  const user = useAppSelector((state) => state.auth.user);

  // open sidebar on desktop
  useEffect(() => {
    if (screenSize.width > 768) {
      setIsOpen(true);
    }
  }, [screenSize.width]);

  // stop scrolling on body (fix for chrome)
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!user) return;

  return (
    <div className="h-screen">
      <div className="flex">
        <Sidebar isOpen={isOpen} />
        <div className="flex-1">
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
          <div className="p-4 h-[calc(100vh-64px)] overflow-y-auto bg-secondary">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
