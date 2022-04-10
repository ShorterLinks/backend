import { model, Schema } from "mongoose"
import { ILinks } from "../interfaces";

const LinkSchema = new Schema<ILinks>({
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
    type: Boolean,
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
    required: true,
    type: String,
    default: 'main',
  },
});

export const linkSchema = model<ILinks>('LinkModel', LinkSchema);
