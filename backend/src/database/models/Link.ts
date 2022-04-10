import { model, Schema } from 'mongoose';
import { ILink } from '../interfaces';

const LinkSchema = new Schema<ILink>({
  userUuid: {
    required: false,
    type: String,
    default: 'unknown',
  },
  shortPath: {
    required: true,
    type: String,
  },
  destinationLink: {
    required: true,
    type: String,
  },
  verified: {
    required: true,
    type: String,
    default: false,
  },
  clickCounter: {
    required: true,
    type: Number,
    default: 0,
  },
  lastVisit: {
    required: true,
    type: Date,
    default: Date.now(),
  },
  description: {
    required: true,
    type: String,
    default: '',
  },
  group: {
    required: false,
    type: String,
  },
});

export const linkSchema = model<ILink>('LinkModel', LinkSchema);
