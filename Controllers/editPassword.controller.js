import { compare } from "bcrypt"
import Account from "../Schema/AccountSchema.js"

const editPasswordController = async(req, res)=> {
    const { Password, NewPassword } = req.body
    const { idAccount } = req.params
    const account = await Account.findOne({Id: idAccount})
    if(!account) return res.status(400).send(`Account with Id:${idAccount} don't exists`)
    const checkPassword = compare(Password, account.Password)
    if(!checkPassword) return res.status(401).send("Incorrect creentials")

    await Account.findOneAndUpdate( { Id: idAccount }, {Password: NewPassword} )
    res.status(200).send(account)
}

export default editPasswordController