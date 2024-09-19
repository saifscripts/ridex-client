import { USER_ROLE } from '@/constants';

export interface IDecodedUser {
  id: string;
  role: keyof typeof USER_ROLE;
  iat: number;
  exp: number;
}

export type IUserRole = keyof typeof USER_ROLE;

export interface IUser {
  _id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  avatarURL: string;
  role: IUserRole;
}
