import { useQuery } from '@tanstack/react-query';

import { RoomsFilter } from '../types';
import { roomsQueries } from './query-keys';

export const useGetRooms = (filters: RoomsFilter) =>
  useQuery(roomsQueries.list(filters));
