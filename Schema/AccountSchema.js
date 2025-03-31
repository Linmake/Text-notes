import mongoose from "mongoose";

const { Schema } = mongoose

export const AccountSchema = new Schema({
    Id: {
        Type: String,
    },
    Name: {
        Type: String,
    },
    Password: {
        Type: String,
    },
    Email: {
        Type: String,
    },
    Role: {
        Type: String,
    },
})

const Account = mongoose.model('Account', AccountSchema)
export default Account