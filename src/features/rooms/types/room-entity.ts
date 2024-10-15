import { UserEntity } from '@/features/auth';
import { BaseEntity } from '@/types';

export type RoomEntity = BaseEntity & {
  name: string;
  ownerId: string;
  owner?: UserEntity;
};
