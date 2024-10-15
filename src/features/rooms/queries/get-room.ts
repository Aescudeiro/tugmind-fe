import { useQuery } from '@tanstack/react-query';

import { roomsQueries } from './query-keys';

export const useGetRoom = (roomId: string) =>
  useQuery(roomsQueries.detail(roomId));
