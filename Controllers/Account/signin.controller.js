import authToken from "../../Routes/auth_token.js"
import cookieAuth from "./cookie/cookieAuth.js"
import authByEmailAndPassword from "../../Helpers/Account/authByEmailAndPassword.js"
const signinController = async(req, res) => {
    try{
        const {Email, Password} = req.body
        const account = await authByEmailAndPassword(Email, Password)
        if(!account) return res.status(401).send("Incorrect credentials")
        const jwt = await authToken(account.Id)
        res.cookie("JWT", jwt, cookieAuth())
        return res.status(200).send(account)
        }catch(err){
        return res.status(401).send(`Error: ${err}`)
    }
}
export default signinController