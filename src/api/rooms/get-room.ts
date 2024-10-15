import { RoomEntity } from '@/features';
import { apiClient } from '@/lib';

export const getRoom = async (roomId: string) => {
  const { data } = await apiClient.get<RoomEntity>(`rooms/${roomId}`);

  return data;
};
