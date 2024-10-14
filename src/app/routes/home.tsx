import {
  AppLayout,
  Button,
  Card,
  CardContent,
  InstructionsDialog,
} from '@/components';
import { useAuthStore } from '@/features';

export const HomeRoute = () => {
  const { user } = useAuthStore();
  return (
    <AppLayout>
      <Card className="max-w-2xl mx-auto">
        <CardContent className="pt-6">
          <h1 className="text-3xl font-bold mb-4">
            Welcome to TugMind, {user?.name}!
          </h1>
          <p className="text-lg mb-6">
            Ready to challenge your mind and pull the victory rope? Play Now and
            show who is the best!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Play
            </Button>
            <InstructionsDialog />
          </div>
        </CardContent>
      </Card>
    </AppLayout>
  );
};
