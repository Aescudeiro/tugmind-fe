import { BaseEntity } from '@/types';

export type UserEntity = BaseEntity & {
  email: string;
  name: string;
  accessToken: string;
};
