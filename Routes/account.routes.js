import Account from '../Schema/AccountSchema'
import express from 'express'

const AccountRouter = express.Router()

AccountRouter.get("all", async(req, res) => {
    const allAccounts = await Accounts.find({})
    res.status(200).send(allAccounts)
})

AccountRouter.get("/:idAccount", async(req, res) => {
    const { idAccount } = req.params
    const account = Account.findOne({ Id: idAccount })
    if(!account) return res.status(400).send(`Account with Id: ${idAccount} don't exist`)
    return res.status(200).send(account)
})

AccountRouter.post("/create", validateAccount,async(req, res) => {
    try{
        const valideId = await Account.exists({ Id: req.body.Id })
        if (valideId){    
            return res.status(400).send("An account with the ID: ${valideId} already exists")
        } 
        const newAccount = await Account.create(req.body)
        return res.status(201).send(newAccount)
    }catch(err){
        res.status(500).send(err.message)
    }
})

AccountRouter.put('/edit/:idAccount', async(req, res)=> {
    const { User, Password, Email } = req.body
    const account = await Account.findOne({
        Id: req.params.idAccount
    })
    if(!account) return res.send(`User with Id: ${req.params.idAccount} don't exist`)
    const userExist = await Account.exist({ User: User })
    const passwordExist = await Account.exist({ Password: Password })
    const emailExist = await Account.exist({ Email: Email })
    if( userExist ) return res.status(400).send(`User: ${User} already exist`)
    if( passwordExist ) return res.status(400).send(`Password: ${Password} already exist`)
    if( emailExist ) return res.status(400).send(`Email: ${Email} already exist`)
    const query = { Id: req.params.idAccount }
    const newAccount = {
        User: ( (!User) ? account.User : User ),
        Password: ( (Password) ? account.Password : Password ),
        Email: ( (Email) ? account.Email : Email )
    }
    await Account.findOneAndUpdate( query, newAccount )
    res.status(200).send(`Account with Id: "${req.params.idAccount}" editado con exito`)
})

AccountRouter.delete('delete/all', async(req, res) => {
    await Account.deleteMany({})
    res.status(200).send('All accounts successfully deleted')
})

AccountRouter.delete('delete/:idAccount', async(req, res)=>{
    const { idAccount } = req.params
    const account = await Account.findOne({ Id: idAccount })
    if(!account) return res.status(400).send(`Account with Id:${idAccount} don't exist`)
    await Account.findOneAndDelete({ Id: idAccount })
    res.status(200).send(`Account with Id:${idAccount} succesfully deleted`)
})

export default AccountRouter