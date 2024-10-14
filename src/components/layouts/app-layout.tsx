import { LogOut } from 'lucide-react';
import { FC, ReactNode } from 'react';

import { useAuthStore } from '@/features';

import { Button } from '../ui';

type Props = {
  children: ReactNode;
};

export const AppLayout: FC<Props> = ({ children }) => {
  const { removeUser } = useAuthStore();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100">
      <header className="p-4 flex justify-end items-center bg-white shadow-sm">
        <Button variant="ghost" onClick={removeUser}>
          <LogOut className="mr-2 h-4 w-4" /> Logout
        </Button>
      </header>
      <main className="container mx-auto px-4 py-8 text-center">
        {children}
      </main>
    </div>
  );
};
