import authToken from '../../Routes/auth_token.js'
import cookieAuth from './cookie/cookieAuth.js'
import { signupByEmail } from '../../Helpers/Account/signupByEmail.js'
const signupController = async( req, res ) => {
    try{
        const account = await signupByEmail(req.body)
        const jwt = await authToken(account.Id)
        const cookieBody = cookieAuth()
        res.cookie('JWT', jwt, cookieBody)
        await account.save()
        return res.status(201).send(account)
    }catch(err){
        return res.status(401).send(err.message)
    }
}
export default signupController