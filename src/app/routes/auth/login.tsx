import { useNavigate } from 'react-router-dom';

import { LoginForm } from '@/features';

export const LoginRoute = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    navigate('/', { replace: true });
  };

  return (
    <div>
      <LoginForm onSuccess={handleLoginSuccess} />
    </div>
  );
};
