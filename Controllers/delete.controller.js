import { compare } from "bcrypt"
import Account from "../Schema/AccountSchema.js"
import { decodeJwt } from "jose"

const deleteController = async(req, res)=>{
    const { Password } = req.body
    const JWT = req.cookies.JWT
    if(!JWT || JWT == undefined) {
        return res.status(401).send("Incorrect credentials") 
    }

    const {Id} = decodeJwt(JWT)

    if(!Id) {
        return res.status(401).send('Incorrect credentials') 
    }
    if(!Password){
        return res.status(401).send('Incorrect credentials')
    }
    const account = await Account.findOne({ Id: Id })

    if(!account) {
        return res.status(400).send(`Account with Id: ${Id} don't exists`)
    }

    const checkPassword = compare(Password, account.Password)
    if(!checkPassword) {
        return res.status(401).send("Incorrect credentials")
    }
    
    await Account.deleteOne({Id: Id})
    res.clearCookie("JWT", { path:"/" })

    return res.status(200).send(`Account with Id: ${Id} succesfully deleted`)
}

export default deleteController