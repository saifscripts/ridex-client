import { Navbar } from '@/components/layout/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="h-[calc(100vh-64px)] overflow-y-scroll container">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
