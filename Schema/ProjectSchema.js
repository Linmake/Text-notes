import mongoose from "mongoose";
import { FolderSchema } from "./FolderSchema.js";
const { Schema } = mongoose;

const ProjectSchema = new Schema({
  Id: {
    type: String,
    required: [true, 'UId es obligatorio.'],
    validate: {
      validator: String,
      message: 'UId debe ser un String.'
    }
  },
  Title: {
    type: String,
    required: [true, 'El Título es obligatorio.'],
    trim: true
  },
  Date: {
    type: String,
    validate: {
      validator: function (v) {
        return v ? /\d{4}-\d{2}-\d{2}/.test(v) : true;
      },
      message: 'La Fecha debe ser de tipo String en formato YYYY-MM-DD.'
    },
    default: null
  },
  Folders: [FolderSchema]
}, {
  versionKey: false,
  strict: true,
  strictQuery: 'throw'
});

const Project = mongoose.model('Project', ProjectSchema);
export default Project 