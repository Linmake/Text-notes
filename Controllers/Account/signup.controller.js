import authToken from '../../Routes/auth_token.js'
import Account from '../../Schema/AccountSchema.js'
import { v4 as uuidv4 } from 'uuid'
import { hash } from 'bcrypt'
import cookieAuth from './cookie/cookieAuth.js'
const signupController = async( req, res ) => {
    try{
        const { Email, Name, Password, Role } = req.body
        const uuid = uuidv4()
        if(req.body.lenght == 0){
            res.status(400).send(`Required is empty`)
            return
        }
        const accountById = await Account.findOne({Id: uuid})
        const accountByEmail = await Account.findOne({ Email: Email })
        if (accountById){
            res.status(400).send(`Account with Id: ${uuid} already exists`)
            return
        }
        if (accountByEmail){
            res.status(400).send(`Account with Email: ${Email, accountByEmail} already exists`)
            return
        }
        const hashPassword = await hash(Password, 8)
        const account = new Account({
            Id: uuid,
            Name,
            Password: hashPassword,
            Email, 
            Role
        })  
        const jwt = await authToken(uuid)
        await account.save()

        const cookieBody = cookieAuth()
        res.cookie("JWT", jwt, cookieBody)
        return res.status(201).send(account)
    }catch(err){
        console.log("catch error signup")
        return res.status(401).send(err.message)
    }
}
export default signupController