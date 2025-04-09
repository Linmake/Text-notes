import { compare } from "bcrypt"
import Account from "../Schema/AccountSchema.js"

const editEmailController = async(req, res)=> {
    const { Password, Email } = req.body
    const { idAccount } = req.params
    const account = await Account.findOne({Id: idAccount})
    if(!account) return res.status(400).send(`Account with Id:${idAccount} don't exists`)
    const checkPassword = compare(Password, account.Password)
    if(!checkPassword) return res.status(401).send("Incorrect creentials")
    const accountByEmail = await Account.findOne({Email: Email})
    if(accountByEmail) return res.status(400).send("Incorrect creentials")


    await Account.findOneAndUpdate( { Id: idAccount }, {Email: Email} )
    res.status(200).send(account)
}

export default editEmailController