import DashboardLayout from '@/components/layout/DashboardLayout/DashboardLayout';
import ErrorPage from '@/components/layout/ErrorPage';
import { MainLayout } from '@/components/layout/MainLayout';
import ProtectedRoute from '@/components/layout/ProtectedRoute';
import PublicRoute from '@/components/layout/PublicRoute';
import { USER_ROLE } from '@/constants';
import AboutUs from '@/pages/AboutUs';
import BikeDetails from '@/pages/BikeDetails';
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
    errorElement: <ErrorPage />,
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
        path: 'bike/:bikeId',
        element: <BikeDetails />,
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
      <ProtectedRoute authorizedRoles={[USER_ROLE.ADMIN, USER_ROLE.USER]}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute authorizedRoles={[USER_ROLE.ADMIN, USER_ROLE.USER]}>
            <DashboardHome />,
          </ProtectedRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <ProtectedRoute authorizedRoles={[USER_ROLE.ADMIN, USER_ROLE.USER]}>
            <Profile />,
          </ProtectedRoute>
        ),
      },
      {
        path: 'bikes',
        element: (
          <ProtectedRoute authorizedRoles={[USER_ROLE.ADMIN, USER_ROLE.USER]}>
            <Bikes />,
          </ProtectedRoute>
        ),
      },
      {
        path: 'bookings',
        element: (
          <ProtectedRoute authorizedRoles={[USER_ROLE.USER]}>
            <Bookings />,
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
