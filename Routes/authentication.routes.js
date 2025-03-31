import authByEmailPwd from '../helpers/authByEmailPwd'
import express from 'express'

const AuthenticationRouter = express.Router()

AuthenticationRouter.post("authentication", async(req, res) => {
    try{
        const { Email, Password } = req.body
        if (!Email || !Password) {
            res.send(400)
        }
        const user = authByEmailPwd( Email, Password )
        return res.send(200)
    }catch(err){
        return res.send(401)
    }
})

AuthenticationRouter.post("authorized", async(req, res) => {
    try{
        const { Email, Password } = req.body
        if (!Email || !Password) res.send(400)
        const user = authByEmailPwd( Email, Password )
        if(user.Role !== "Admin") {
            res.send(403)
        }
        return res.send(200).send(user)
    }catch(err){
        return res.send(403)
    }
})