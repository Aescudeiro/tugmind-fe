import { createBrowserRouter } from 'react-router-dom';

import { ProtectedRouter } from '@/components';

import { AuthRoute, HomeRoute, LoginRoute, RegisterRoute } from './routes';

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
