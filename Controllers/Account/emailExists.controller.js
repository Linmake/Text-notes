import { compare } from "bcrypt"
import Account from "../../Schema/AccountSchema.js"
import { decodeJwt } from "jose"

const emailExistsController = async(req, res)=> {
    const { Email } = req.body
    const accountExistByEmail = await Account.findOne({Email: Email})
    if(accountExistByEmail) {
        return res.send(true)
    }
    res.status(200).send(false)
}

export default emailExistsController