import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

import {
  AuthLayout,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components';

export const AuthRoute = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeTab, setActiveTab] = useState(
    location.pathname.split('/').pop() || 'login',
  );

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    navigate(tab, {
      replace: true,
    });
  };

  useEffect(() => {
    setActiveTab(location.pathname.split('/').pop() || 'login');
  }, [location.pathname]);

  return (
    <AuthLayout>
      <div className="flex-1 bg-muted flex items-center justify-center p-8"></div>
      <div className="flex-1 flex items-center justify-center p-8">
        <Card className="w-full max-w-md">
          <Tabs
            value={activeTab}
            onValueChange={handleTabChange}
            defaultValue="login"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <CardHeader>
                <CardTitle>Welcome back</CardTitle>
                <CardDescription>
                  Enter your credentials to access your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Outlet />
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <div className="text-sm text-center">
                  <Link
                    to="/forgot-password"
                    className="text-primary hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </CardFooter>
            </TabsContent>

            <TabsContent value="register">
              <CardHeader>
                <CardTitle>Create an account</CardTitle>
                <CardDescription>
                  Enter your details to create your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Outlet />
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </AuthLayout>
  );
};
