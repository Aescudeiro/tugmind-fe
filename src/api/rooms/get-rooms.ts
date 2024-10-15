import { RoomEntity, RoomsFilter } from '@/features';
import { apiClient } from '@/lib';

export const getRooms = async (filters: RoomsFilter) => {
  const { data } = await apiClient.get<RoomEntity[]>('rooms', {
    params: filters,
  });

  return data;
};
