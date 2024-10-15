import { RefreshCw } from 'lucide-react';
import { useState } from 'react';

import { AppLayout, Button, Input, Spinner } from '@/components';
import { CreateRoom, NoRooms, RoomCard, useGetRooms } from '@/features';

export const RoomsRoute = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const {
    data: rooms,
    isLoading,
    isRefetching,
    refetch,
  } = useGetRooms({
    name: searchTerm,
  });

  return (
    <AppLayout>
      <h1 className="text-3xl font-bold mb-6">Available Rooms</h1>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
        <CreateRoom />
        <Button
          variant="outline"
          className="w-full sm:w-auto"
          onClick={() => refetch()}
        >
          <RefreshCw className="mr-2 h-4 w-4" /> Refresh
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex-1 w-full sm:w-auto">
          <Input
            type="text"
            placeholder="Search rooms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      {isLoading || isRefetching ? (
        <Spinner />
      ) : rooms?.length && rooms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rooms?.map((room) => <RoomCard key={room.id} room={room} />)}
        </div>
      ) : (
        <NoRooms />
      )}
    </AppLayout>
  );
};
