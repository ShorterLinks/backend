import { Document } from "mongoose";

export type UserRole = 'Admin' | 'RegisteredUser' | 'User';

export enum role {
  Admin= 'Admin',
  RegisteredUser = 'RegisteredUser',
  User = 'User',
}

export interface IUser extends Document {
  login: string,
  email?: string,
  password: string,
  salt: string,
  role: UserRole,
}

export interface ILinks extends Document {
  userUuid: string,
  shortPath: string,
  destinationLink: string,
  verified: string,
  clickCounter: number,
  lastVisit: Date,
  description: string,
  group: string,
}

export type Devices = 'PC' | 'PHONE' | 'TABLET' | 'TV' | 'OTHER';

export interface IErrors extends Document {
  userUuid: string,
  errorMessage: string,
  userAgent: string,
  endpointBackend: string,
  endpointFrontend: string,
  device: Devices,
}