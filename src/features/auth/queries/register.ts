import { useMutation } from '@tanstack/react-query';

import { api } from '@/api';

export const useRegister = () =>
  useMutation({
    mutationFn: api.auth.register,
  });
