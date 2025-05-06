import Account from "../../Schema/AccountSchema.js"
import { decodeJwt } from "jose"
const loginController = async(req, res) => {
    try{
        const {JWT} = req.cookies
        const {Id} = decodeJwt(JWT)
        const accountById = await Account.findOne({ Id: Id })
        if(!accountById) {
            res.status(401).send("Incorrect credentials")
            return
        }
        return res.status(200).send(accountById)
        }catch(err){
        res.status(401).send(`Error: ${err}`)
        return 
    }
}
export default loginController