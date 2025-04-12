import { compare } from "bcrypt"
import Account from "../Schema/AccountSchema.js"

const signinController = async(req, res) => {
    try{
        const {Email, Password} = req.body
        const accountByEmail = await Account.findOne({ Email: Email })
        if(!accountByEmail) {
            res.status(401).send("Incorrect credentials")
            return
        }
        const checkPassword = await compare(Password, accountByEmail.Password)
        if(!checkPassword) {
            res.status(401).send("Incorrect credentials")
            return 
        }
        res.status(200).send(accountByEmail.Id)
        return 
    }catch(err){
        res.status(401).send(err)
        return 
    }
}

export default signinController