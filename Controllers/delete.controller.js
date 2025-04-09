import { compare } from "bcrypt"
import Account from "../Schema/AccountSchema.js"

const deleteController = async(req, res)=>{
    const { idAccount } = req.params
    const { Password } = req.body
    const account = await Account.findOne({ Id: idAccount })
    if(!account) return res.status(400).send(`Account with Id:${idAccount} don't exists`)
    const checkPassword = compare(Password, account.Password)
    if(!checkPassword) return res.status(401).send("Incorrect creddentials")
    await Account.findOneAndDelete({ Id: idAccount })
    res.status(200).send(`Account with Id:${idAccount} succesfully deleted`)
}

export default deleteController