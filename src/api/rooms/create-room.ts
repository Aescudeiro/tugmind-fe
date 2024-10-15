import { CreateRoomFormValues, RoomEntity } from '@/features';
import { apiClient } from '@/lib';

export const createRoom = async (createRoomValues: CreateRoomFormValues) => {
  const { data } = await apiClient.post<RoomEntity>('rooms', createRoomValues);

  return data;
};
