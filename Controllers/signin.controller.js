import { compare } from "bcrypt"
import Account from "../Schema/AccountSchema.js"
import authToken from "../Routes/auth_token.js"

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
        const jwt = await authToken(accountByEmail.Id)

        await res.cookie("JWT", jwt, {
            httpOnly: true,
            exp: "1d"
        })

        res.status(200).send(accountByEmail)
        return 
    }catch(err){
        res.status(401).send(`Error: ${err}`)
        return 
    }
}

export default signinController