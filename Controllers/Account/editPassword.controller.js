import { compare, hash } from "bcrypt"
import Account from "../../Schema/AccountSchema.js"
import { decodeJwt } from "jose"

const editPasswordController = async(req, res)=> {
    const { Password, NewPassword } = req.body
    const JWT = req.cookies.JWT
    if(!JWT){
        return res.status(401).send(`Incorrect creentials`)
    }
    const { Id } = decodeJwt(JWT)
    if(!Id) return res.status(401).send(`Incorrect creentials`)
    
    const account = await Account.findOne({Id: Id})
    if(!account) return res.status(401).send(`Incorrect creentials`)
    const checkPassword = compare(Password, account.Password)
    if(!checkPassword) return res.status(401).send("Incorrect creentials")

    const hashNewPassword = await hash(NewPassword, 8)

    await Account.findOneAndUpdate( { Id: Id }, {Password: hashNewPassword}, {new: true} )
    res.status(200).send(account)
}

export default editPasswordController