import { useNavigate } from 'react-router-dom';

import { RegisterForm } from '@/features';

export const RegisterRoute = () => {
  const navigate = useNavigate();

  const handleRegisterSuccess = () => {
    navigate('/auth/login', { replace: true });
  };

  return (
    <div>
      <RegisterForm onSuccess={handleRegisterSuccess} />
    </div>
  );
};
