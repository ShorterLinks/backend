import { model, Schema } from 'mongoose';
import { IUser } from '../interfaces';

const UserSchema = new Schema<IUser>({
  email: {
    required: false,
    type: String,
  },
  login: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  salt: {
    required: true,
    type: String,
  },
  role: {
    required: true,
    type: String, // TODO enum value?
  },
});

export const userModel = model<IUser>('UserModel', UserSchema);
