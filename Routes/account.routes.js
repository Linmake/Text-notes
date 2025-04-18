import Account from '../Schema/AccountSchema.js'
import express from "express"
import signupController from '../Controllers/Account/signup.controller.js';
import signinController from '../Controllers/Account/signin.controller.js';
import editEmailController from '../Controllers/Account/editEmail.controller.js';
import deleteController from '../Controllers/Account/delete.controller.js';
import editPasswordController from '../Controllers/Account/editPassword.controller.js';
import userJWTDTO from '../DTO/userJWTDTO.js';
import editNameController from '../Controllers/Account/editName.controller.js';

const AccountRouter = express.Router()

AccountRouter.get("/all", async(req, res) => {
    try{
        const allAccounts = await Account.find({})
        return res.status(200).send(allAccounts)
    }catch(err){
        return res.status(400).send(err)
    }
})

AccountRouter.post("/signup", signupController)

AccountRouter.post("/signin", signinController)

AccountRouter.put('/update-email', userJWTDTO, editEmailController)

AccountRouter.put('/update-password', userJWTDTO, editPasswordController)

AccountRouter.put('/update-name', userJWTDTO, editNameController)

AccountRouter.delete('/delete', userJWTDTO, deleteController)

export default AccountRouter