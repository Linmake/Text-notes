import { compare } from "bcrypt"
import Account from "../../Schema/AccountSchema.js"
import { decodeJwt } from "jose"

const editNameController = async(req, res)=> {
    try{
        const { Password, Name } = req.body
        const JWT = req.cookies.JWT
        if(!JWT) {
            return res.status(401).send(`Incorrect Credentials`)
        }
        const {Id} = decodeJwt(JWT)
        const account = await Account.findOne({Id: Id})
        if(!account) {
            return res.status(401).send(`Incorrect Credentials`)
         }
        const checkPassword = compare(Password, account.Password)
        if(!checkPassword) {
            return res.status(401).send("Incorrect creentials")
        }
        await Account.findOneAndUpdate({Id: Id}, { Name: Name }, {new: true})
        return res.status(200).send(account)
    }catch(err){
        return res.status(401).send(`Error: ${err}`)
    }
}

export default editNameController