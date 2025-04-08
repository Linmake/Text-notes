import { compare } from "bcrypt"
import Account from "../Schema/AccountSchema.js"

const accountSigninController = async(req, res) => {
    try{
        const {Id, Email, Password} = req.body
        if(!Id) return res.status(401).send('Id is required')
        const account = await Account.findOne({ Id: Id })
        if(!account) return res.status(401).send(`Account with Id: ${Id} don't exists`)

        if( account.Email !== Email ) return res.status(401).send("email don't match")
        const checkPassword = await compare(Password, account.Password)
        if(!checkPassword) return res.status(401).send("password don't match")

        const secret = process.env.JWT_PRIVATE_KEY;
        
        if(!secret) return res.status(401)
        const jwtContructor = new SignJWT({ Id })
        if(!jwtContructor) return res.status(401)
        const jwt = await jwtContructor
        .setProtectedHeader({
            alg: 'HS256',
            typ: 'jwt'
        })
        .setIssuedAt()
        .setExpirationTime('7d')
        .sign(new TextEncoder().encode(process.env.JWT_PRIVATE_KEY))
        if(!jwt) return res.status(401)
        return res.send(jwt)
    }catch(err){
        return res.status(400).send(err)
    }
}

export default accountSigninController