import { RegisterFormValues } from '@/features';
import { apiClient } from '@/lib';

export const register = async (registerValues: RegisterFormValues) => {
  const { data } = await apiClient.post('users', registerValues);

  return data;
};
