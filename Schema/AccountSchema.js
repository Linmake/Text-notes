import mongoose from "mongoose";

const { Schema } = mongoose

export const AccountSchema = new Schema({
    Id: {
        type: String,
        required: [true, 'Id is requied'],
        validate: {
            validator: String,
            message: 'Id most be a string'
        }
    },
    Name: {
        type: String,
        required: [true, 'Name is requied'],
        validate: {
            validator: String,
            message: 'Name most be a string'
        }
    },
    Password: {
        type: String,
        required: [true, 'Password is requied'],
        validate: {
            validator: String,
            message: 'Password most be a string'
        }
    },
    Email: {
        type: String,
        required: [true, 'Email is requied'],
        validate: {
            validator: String,
            message: 'Email most be a string'
        }  
    },
    Role: {
        type: String,
        required: [true, 'Role is requied'],
        validate: {
            validator: String,
            message: 'Role most be a string'
        }
    },
})

const Account = mongoose.model('Account', AccountSchema)
export default Account