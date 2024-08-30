import DashboardLayout from '@/components/layout/DashboardLayout/DashboardLayout';
import { MainLayout } from '@/components/layout/MainLayout';
import ProtectedRoute from '@/components/layout/ProtectedRoute';
import PublicRoute from '@/components/layout/PublicRoute';
import AboutUs from '@/pages/AboutUs';
import Bikes from '@/pages/Bikes';
import Bookings from '@/pages/dashboard/Bookings';
import DashboardHome from '@/pages/dashboard/DashboardHome';
import Profile from '@/pages/dashboard/Profile';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
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
        path: 'bikes',
        element: <Bikes />,
      },
      {
        path: 'about-us',
        element: <AboutUs />,
      },
      {
        path: 'login',
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: 'signup',
        element: (
          <PublicRoute>
            <Signup />
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
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
]);

export default router;
