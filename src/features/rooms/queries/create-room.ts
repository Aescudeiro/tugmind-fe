import { useMutation, useQueryClient } from '@tanstack/react-query';

import { createRoom } from '@/api/rooms';

import { roomsQueries } from './query-keys';

export const useCreateRoom = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createRoom,
    onSuccess: (newRoom) => {
      queryClient.setQueryData(
        roomsQueries.detail(newRoom.id).queryKey,
        newRoom,
      );

      queryClient.invalidateQueries({
        queryKey: roomsQueries._def,
      });
    },
  });
};
