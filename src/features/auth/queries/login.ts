import { useMutation } from '@tanstack/react-query';

import { apiClient } from '@/lib';

import { LoginFormValues } from '../components';
import { useAuthStore } from '../stores';
import { UserEntity } from '../types';

export const useLogin = () => {
  const { setUser } = useAuthStore();

  return useMutation({
    mutationFn: async (data: LoginFormValues) =>
      await apiClient
        .post<UserEntity>('/auth/login', data)
        .then((res) => res.data),
    onSuccess: (data) => {
      setUser(data);
    },
  });
};
