import { compare } from "bcrypt"
import Account from "../Schema/AccountSchema.js"

const signinController = async(req, res) => {
    try{
        const {Email, Password} = req.body
        const accountByEmail = await Account.findOne({ Email: Email })
        if(!accountByEmail) return res.status(401).send("Incorrect credentials")

        const checkPassword = await compare(Password, accountByEmail.Password)
        if(!checkPassword) return res.status(401).send("Incorrect credentials")

        const secret = process.env.JWT_PRIVATE_KEY;
        
        if(!secret) return res.status(401)
        const jwtContructor = new SignJWT({ Id: accountByEmail.Id })
        if(!jwtContructor) return res.status(401)
        const jwt = await jwtContructor
        .setProtectedHeader({
            alg: 'HS256',
            typ: 'JWT'
        })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(new TextEncoder().encode(process.env.JWT_PRIVATE_KEY))

        return res.status(200).send(jwt)
    }catch(err){
        return res.status(401).send(err)
    }
}

export default signinController