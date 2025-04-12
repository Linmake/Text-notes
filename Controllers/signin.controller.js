import { compare } from "bcrypt"
import Account from "../Schema/AccountSchema.js"

const signinController = async(req, res) => {
    try{
        const {Email, Password} = req.body
        const {Id} = req
        if(!Id) return res.status(401).send("Incorrect Token")
        const accountByEmail = await Account.findOne({ Email: Email })
        const accountById = await  Account.findById({ Id })
        if(!accountById) return res.status(401).send("Incorrect ID")
        if(!accountByEmail) return res.status(401).send("Incorrect credentials")

        const checkPassword = await compare(Password, accountByEmail.Password)
        if(!checkPassword) return res.status(401).send("Incorrect credentials")

        return res.status(200).send(Id)
    }catch(err){
        return res.status(401).send(err)
    }
}

export default signinController