import mongoose from "mongoose";

const { Schema } = mongoose;

export const FileSchema = new Schema({
  Id: {
    type: String,
    required: [true, 'El campo Id es obligatorio.']
  },
  IdFolder: {
    type: String,
    required: [true, 'El campo IdFolder es obligatorio.']
  },
  Title: {
    type: String,
    required: [true, 'El campo Title es obligatorio.']
  },
  Text: {
    type: String,
    required: [true, 'El campo Text es obligatorio.']
  },
});

const File = mongoose.model('File', FileSchema)
export default File
