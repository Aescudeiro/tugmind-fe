import { Users } from 'lucide-react';
import { FC } from 'react';

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components';

import { RoomEntity } from '../types';

type Props = {
  room: RoomEntity;
};

export const RoomCard: FC<Props> = ({ room }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{room.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          <Users className="h-4 w-4" />
          <span>0/0 players</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Join Room</Button>
      </CardFooter>
    </Card>
  );
};
