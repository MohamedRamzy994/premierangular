import { User } from './user';

export class Result {
  Status: boolean;
  Message: string;
  UserList?: User[] | null ;
}
