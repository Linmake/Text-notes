import { compare } from "bcrypt"
import Account from "../Schema/AccountSchema.js"

const deleteAllController = async(req, res)=>{
    const JWT = req.cookies.JWT
    if(!JWT || JWT == undefined){
        return res.status(401).send('Incorrect Credentials')
    }
    const account = await Account.findOne({ Id: JWT.Id })

    if(!account) {
        return res.status(400).send(`Account with Id:${ JWT.Id } don't exists`)
    }
    const checkPassword = compare(Password, account.Password)
    if(!checkPassword) {
        return res.status(401).send("Incorrect creddentials")
    }
    await Account.deleteMany({})
    await account.save()

    return res.status(200).send(`Account with Id:${JWT.Id} succesfully deleted`)
}

export default deleteAllController