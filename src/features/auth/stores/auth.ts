import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { UserEntity } from '../types';

type AuthStore = {
  user: UserEntity | null;
};

type AuthStoreActions = {
  setUser: (_user: UserEntity) => void;
  removeUser: () => void;
};

export const useAuthStore = create<AuthStore & AuthStoreActions>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      removeUser: () => set({ user: null }),
    }),
    {
      name: 'auth',
      storage: {
        getItem: (name) => {
          const item = localStorage.getItem(name);

          return item ? JSON.parse(item) : null;
        },
        setItem: (name, value) =>
          localStorage.setItem(name, JSON.stringify(value)),
        removeItem: (name) => localStorage.removeItem(name),
      },
    },
  ),
);
