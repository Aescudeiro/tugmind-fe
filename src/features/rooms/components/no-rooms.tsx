import { Gamepad2 } from 'lucide-react';

export const NoRooms = () => {
  return (
    <div className="text-center py-8">
      <Gamepad2 className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-2 text-sm font-semibold text-gray-900">
        No rooms available
      </h3>
      <p className="mt-1 text-sm text-gray-500">
        Get started by creating a new room.
      </p>
    </div>
  );
};
