import { compare } from "bcrypt"
import Account from "../../Schema/AccountSchema.js"
import { decodeJwt } from "jose"

const editEmailController = async(req, res)=> {
    const { Password, Email } = req.body
    const JWT = req.cookies.JWT
    if(!JWT){
        return res.status(401).send('Incorrect credentials')
    }//factorization in one component
    const {Id} = decodeJwt(JWT)
    if(!Id){
        return res.status(401).send('Incorrect credentials')
    }
    const account = await Account.findOne({Id: Id})
    if(!account) {
        return res.status(400).send(`Account with Id:${Id} don't exists`)
    }
    const checkPassword = compare(Password, account.Password)
    if(!checkPassword) {
        return res.status(401).send("Incorrect creentials")
    }
    const accountExistByEmail = await Account.findOne({Email: Email})
    if(accountExistByEmail) {
        return res.status(400).send("Incorrect creentials")
    }
    const updateEmailAccount = await Account.findOneAndUpdate( { Id: Id }, {Email: Email}, {new: true} )
    res.status(200).send(updateEmailAccount)
}

export default editEmailController