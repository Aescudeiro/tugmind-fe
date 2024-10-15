import { createBrowserRouter } from 'react-router-dom';

import { ProtectedRouter } from '@/components';

import {
  AuthRoute,
  HomeRoute,
  LoginRoute,
  RegisterRoute,
  RoomRoute,
  RoomsRoute,
} from './routes';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRouter>
        <HomeRoute />
      </ProtectedRouter>
    ),
  },
  {
    path: 'rooms',
    element: (
      <ProtectedRouter>
        <RoomsRoute />
      </ProtectedRouter>
    ),
    children: [
      {
        path: ':roomId',
        element: <RoomRoute />,
      },
    ],
  },
  {
    path: 'auth',
    element: <AuthRoute />,
    children: [
      {
        path: 'login',
        index: true,
        element: <LoginRoute />,
      },
      {
        path: 'register',
        element: <RegisterRoute />,
      },
    ],
  },
]);
