import { Document } from 'mongoose';

export enum role {
  Admin = 'Admin',
  Unregistered = 'Unregistered',
  User = 'User',
}

export type UserRole = role.Admin | role.User | role.Unregistered;

export interface IUser extends Document {
  login: string;
  email?: string;
  password: string;
  salt: string;
  role: UserRole;
}

export enum verified {
  Safe = 'Safe',
  Unsafe = 'Unsafe',
  Unverified = 'Unverified',
}

export type Verified = verified.Safe | verified.Unsafe | verified.Unverified;

export interface ILink extends Document {
  userUuid: string;
  shortPath: string;
  destinationLink: string;
  verified: Verified;
  clickCounter: number;
  lastVisit: Date;
  description: string;
  group: string;
}

export type Devices = 'PC' | 'PHONE' | 'TABLET' | 'TV' | 'OTHER';

export interface IError extends Document {
  userUuid: string;
  errorMessage: string;
  userAgent: string;
  endpointBackend: string;
  endpointFrontend: string;
  device: Devices;
}
