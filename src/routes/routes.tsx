import DashboardLayout from '@/components/layout/DashboardLayout/DashboardLayout';
import { MainLayout } from '@/components/layout/MainLayout';
import AboutUs from '@/pages/AboutUs';
import Bikes from '@/pages/dashboard/Bikes';
import Bookings from '@/pages/dashboard/Bookings';
import DashboardHome from '@/pages/dashboard/DashboardHome';
import Profile from '@/pages/dashboard/Profile';
import Home from '@/pages/Home';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <DashboardHome />,
          },
          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'bikes',
            element: <Bikes />,
          },
          {
            path: 'bookings',
            element: <Bookings />,
          },
        ],
      },
    ],
  },
]);

export default router;
