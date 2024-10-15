import { createQueryKeys } from '@lukemorales/query-key-factory';

import { api } from '@/api';

import { RoomsFilter } from '../types';

export const roomsQueries = createQueryKeys('rooms', {
  list: (filters: RoomsFilter) => ({
    queryKey: [{ filters }],
    queryFn: () => api.rooms.getRooms(filters),
  }),
  detail: (roomId: string) => ({
    queryKey: [roomId],
    queryFn: () => api.rooms.getRoom(roomId),
  }),
});
