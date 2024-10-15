import Axios, { AxiosHeaders, InternalAxiosRequestConfig } from 'axios';
import { toast } from 'sonner';

import { env } from '@/config';
import { useAuthStore } from '@/features';

const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  const token = useAuthStore.getState().user?.accessToken;

  config.headers = new AxiosHeaders({
    Authorization: `Bearer ${token}`,
  });

  return config;
};

export const apiClient = Axios.create({
  baseURL: env.API_URL,
});

apiClient.interceptors.request.use(authRequestInterceptor);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error.response?.data?.message || error.message;

    toast.error(message);

    if (
      error.response?.status === 401 &&
      !window.location.pathname.includes('/auth')
    ) {
      const searchParams = new URLSearchParams();
      const redirectTo = searchParams.get('redirectTo');
      window.location.href = `/auth/login?redirectTo=${redirectTo}`;
    }

    return Promise.reject(error);
  },
);
