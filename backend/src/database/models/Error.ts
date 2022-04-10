import { model, Schema } from 'mongoose';
import { IError } from '../interfaces';

const ErrorSchema = new Schema<IError>({
  userUuid: {
    required: false,
    type: String,
    default: 'unknown',
  },
  errorMessage: {
    required: true,
    type: String,
  },
  userAgent: {
    required: true,
    type: String,
  },
  endpointBackend: {
    required: true,
    type: String,
  },
  endpointFrontend: {
    required: true,
    type: String,
  },
  device: {
    required: true,
    type: String, // TODO enum value?
  },
});

export const errorModel = model<IError>('ErrorModel', ErrorSchema);
