import Account from "../../Schema/AccountSchema.js"
import { decodeJwt } from "jose"
const logoutController = async(req, res) => {
    try{
        const {JWT} = req.cookies
        if(!JWT){
            return res.status(200).send(req.cookies)
        }
        const {Id} = decodeJwt(JWT)
        const accountById = await Account.findOne({ Id: Id })
        if(!accountById) {
            res.status(401).send("Incorrect credentials")
            return
        }
        res.clearCookie("JWT", {
            httpOnly: true,
            secure: false, //true in production!
            maxAge: 2_592_000_000,
            sameSite: 'Lax'
        })
        return res.status(200).send(req.cookies)
        }catch(err){
        res.status(401).send(`Error: ${err}`)
        return 
    }
}
export default logoutController