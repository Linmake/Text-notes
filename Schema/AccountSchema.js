import mongoose from "mongoose";

const { Schema } = mongoose

export const AccountSchema = new Schema({
    Id: {
        Type: String,
        required: [true, 'Field Id is require'],
    },
    User: {
        Type: String,
        require: [true, 'Field User is require']
    },
    Password: {
        Type: String,
        require: [true, 'Field Password is require'],
    },
    Email: {
        Type: Email,
        require: [true, 'Field Email is require']
    },

})

const Account = mongoose.model('Account', AccountSchema)
export default Account