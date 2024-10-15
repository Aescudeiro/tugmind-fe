import { LoginFormValues, UserEntity } from '@/features';
import { apiClient } from '@/lib';

export const login = async (loginValues: LoginFormValues) => {
  const { data } = await apiClient.post<UserEntity>('auth/login', loginValues);

  return data;
};
