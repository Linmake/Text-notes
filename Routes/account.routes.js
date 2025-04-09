import Account from '../Schema/AccountSchema.js'
import express from "express"
import validateAccount from '../DTO/AccountValidation.js';
import { signupByIdEmail } from '../helpers/signupByIdEmail.js';
import { putEmailPwdAlready } from '../helpers/signupEmailPwdAlready.js';
import authToken from './auth_token.js';
import { v4 as uuidv4 } from 'uuid'
import signupController from '../Controllers/signup.controller.js';
import signinController from '../Controllers/signin.controller.js';
import profileController from '../Controllers/profile.controller.js';
import editEmailController from '../Controllers/editEmail.controller.js';
import deleteController from '../Controllers/delete.controller.js';
import editPasswordController from '../Controllers/editPassword.controller.js';

const AccountRouter = express.Router()

AccountRouter.get("/all", async(req, res) => {
    try{
        const allAccounts = await Account.find({})
        return res.status(200).send(allAccounts)
    }catch(err){
        return res.status(400).send(err)
    }
})

AccountRouter.get("/:idAccount", profileController)

AccountRouter.post("/signin", signinController)

AccountRouter.post("/create", signupController)

AccountRouter.put('/edit/:idAccount', editEmailController)

AccountRouter.put('/edit/:idAccount', editPasswordController)

AccountRouter.delete('delete/:idAccount', deleteController)

export default AccountRouter