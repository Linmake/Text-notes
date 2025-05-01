import Account from "../../Schema/AccountSchema.js"
import { decodeJwt } from "jose"

const deleteAllController = async(req, res)=>{
    const JWT = req.cookies.JWT
    if(!JWT || JWT == undefined){
        return res.status(401).send('Incorrect Credentials')
    }

    const Id = (decodeJwt(JWT)).Id

    const account = await Account.findOne({ Id: Id })
    
    if(!account) {
        return res.status(400).send(`Account with Id:${ Id } don't exists`)
    }

    if(account.Role !== "Admi") {
        return res.status(401).send(`Without authority your Role is: ${account.Role}`)
    }
    await Account.deleteMany({})
    await account.save()

    return res.status(200).send(`Account with Id:${Id} succesfully deleted`)
}

export default deleteAllController