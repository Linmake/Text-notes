import { compare } from 'bcrypt'
import Account from '../../Schema/AccountSchema.js'
const authByEmailAndPassword = async(Email, Password) => {
    const account = await Account.findOne({ Email: Email })
    if(!account) return res.status(401).send("Incorrect credentials")
    const checkPassword = await compare(Password, account.Password)
    if(!checkPassword) return res.status(401).send("Incorrect credentials")
    return account
}
export default authByEmailAndPassword