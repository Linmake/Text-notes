import Account from '../Schema/AccountSchema.js'
import express from "express"
import validateAccount from '../DTO/AccountValidation.js';
import { signupByIdEmail } from '../helpers/signupByIdEmail.js';
import { putEmailPwdAlready } from '../helpers/signupEmailPwdAlready.js';
import authToken from './auth_token.js';
import { v4 as uuidv4 } from 'uuid'
import accountSignupController from '../Controllers/accountSignup.controller.js';
import accountSigninController from '../Controllers/accountSignin.controller.js';

const AccountRouter = express.Router()

AccountRouter.get("/all", async(req, res) => {
    try{
        const allAccounts = await Account.find({})
        return res.status(200).send(allAccounts)
    }catch(err){
        return res.status(400).send(err)
    }
})

AccountRouter.post("/signin", accountSigninController)

AccountRouter.post("/create", accountSignupController)

AccountRouter.put('/edit/:idAccount', async(req, res)=> {
    const { Name, Password, Email } = req.body
    const { idAccount } = req.params
    const account = await putEmailPwdAlready(req.body, idAccount, res)
    if(!account) return res.status(400).send(`Account with Id:${idAccount} don't exists`)
    const query = { Id: req.params.idAccount }

    const newAccount = {
        Name: ( !Name ? account.Name : Name ),
        Password: ( !Password ? account.Password : Password ),
        Email: ( !Email ? account.Email : Email )
    }

    await Account.findOneAndUpdate( query, newAccount )
    res.status(200).send(newAccount)
})

AccountRouter.delete('/delete/all', async(req, res) => {
    await Account.deleteMany({})
    const accounts = await Account.find({})
    res.status(200).send(accounts)
})

AccountRouter.delete('delete/:idAccount', async(req, res)=>{
    const { idAccount } = req.params
    const account = await Account.findOne({ Id: idAccount })
    if(!account) return res.status(400).send(`Account with Id:${idAccount} don't exists`)
    await Account.findOneAndDelete({ Id: idAccount })
    res.status(200).send(`Account with Id:${idAccount} succesfully deleted`)
})

export default AccountRouter