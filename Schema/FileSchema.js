import mongoose from "mongoose";

const { Schema } = mongoose;

export const FileSchema = new Schema({
  Id: {
    type: String,
    required: [true, 'Id is required'],
    unique: true,
    minlength: [5, 'Id must be at least 5 characters long.']
  },
  FolderId: {
    type: String,
    required: [true, 'FolderId is required'],
    minlength: [5, 'FolderId must be at least 5 characters long.']
  },
  Title: {
    type: String,
    required: [true, 'Title is required'],
    minlength: [1, 'Title must be at least 1 character long.']
  },
  Text: {
    type: String,
    required: [false]
  },
  UserId: {
    type: String,
    minlength: [5, 'Id User must be at least 5 characters long.']
  },
});

const File = mongoose.model('File', FileSchema)
export default File
