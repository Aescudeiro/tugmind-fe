import { FC, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthStore } from '@/features';

type Props = {
  children: ReactNode;
};

export const AuthLayout: FC<Props> = ({ children }) => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">{children}</div>
  );
};
