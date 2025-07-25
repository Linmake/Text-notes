import mongoose from 'mongoose';
import { FileSchema } from './FileSchema.js'

const { Schema } = mongoose;

export const FolderSchema = new Schema({
  Id: {
    type: String,
    required: [true, 'Id es obligatorio.']
  },
  Title: {
    type: String,
    required: [true, 'El Título es obligatorio.'],
    trim: true
  },
  Date: {
    type: String,
    required: [true, 'La Fecha es obligatoria.'],
    validate: {
      validator: function (v) {
        return /\d{4}-\d{2}-\d{2}/.test(v);
      },
      message: 'La Fecha debe ser de tipo String en formato YYYY-MM-DD.'
    }
  },
  Void: {
    type: Boolean,
    required: [true, 'El campo Void es obligatorio.']
  },
  ProjectId: {
    type: String,
    required: [true, 'El Id del Proyecto es obligatorio.'],
    trim: true
  },
  Files: [FileSchema],
  UserId: {
    type: String,
    minlength: [5, 'Id User must be at least 5 characters long.']
  },
});

const Folder = mongoose.model('Folder', FolderSchema);

export default Folder;
