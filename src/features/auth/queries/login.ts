import { useMutation } from '@tanstack/react-query';

import { api } from '@/api';

import { useAuthStore } from '../stores';

export const useLogin = () => {
  const { setUser } = useAuthStore();

  return useMutation({
    mutationFn: api.auth.login,
    onSuccess: (data) => {
      setUser(data);
    },
  });
};
