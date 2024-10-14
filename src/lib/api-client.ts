import Axios, { InternalAxiosRequestConfig } from 'axios';
import { toast } from 'sonner';

import { env } from '@/config';
import { useAuthStore } from '@/features';

const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  if (config.headers) {
    config.headers.Accept = 'application/json';
  }

  config.withCredentials = true;

  return config;
};

export const apiClient = Axios.create({
  baseURL: env.API_URL,
});

apiClient.interceptors.request.use(authRequestInterceptor);

apiClient.interceptors.response.use(
  (config) => {
    const token = useAuthStore.getState().user?.accessToken;

    config.headers = { Authoriztion: `Bearer ${token}` };

    return config;
  },
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
