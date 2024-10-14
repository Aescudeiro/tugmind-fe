import { useMutation } from '@tanstack/react-query';

import { apiClient } from '@/lib';

import { RegisterFormValues } from '../components';

export const useRegister = () =>
  useMutation({
    mutationFn: async (data: RegisterFormValues) =>
      await apiClient.post('/auth/register', data).then((res) => res.data),
  });
