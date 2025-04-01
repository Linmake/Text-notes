import Account from '../Schema/AccountSchema.js'
import express from "express"
import validateAccount from '../DTO/AccountValidation.js';

const AccountRouter = express.Router()

AccountRouter.get("/all", async(req, res) => {
    const allAccounts = await Account.find({})
    res.send(allAccounts)
})

AccountRouter.get("/:idAccount", async(req, res) => {
    const { idAccount } = req.params
    const account = await Account.findOne({ Id: idAccount })
    if(!account) return res.status(400).send(`Account with Id: ${idAccount} don't exists`)
    return res.send(account).sendStatus(200)
})

AccountRouter.post("/create", validateAccount,async(req, res) => {
    try{
        const alreadyId = await Account.findOne({ Id: req.body.Id })
        if (alreadyId) {
            return res.status(400).send(`Account with Id: ${req.body.Id} already exists`);
        }
        const EmailValide = await Account.findOne({ Email: req.body.Email })
        if( EmailValide ){
            return res.status(401).send(`Account with Email: ${req.body.Email} already exists`);
        }
        const newAccount = await Account.create(req.body)

        return res.status(201).send(newAccount)
    }catch(err){
        return res.status(500).send(err.message)
    }
})

AccountRouter.put('/edit/:idAccount', async(req, res)=> {
    const { Name, Password, Email } = req.body
    const account = await Account.findOne({
        Id: req.params.idAccount
    })
    if(!account) return res.send(`Name with Id: ${req.params.idAccount} don't exists`)
    const passwordExist = await Account.exists({ Password: Password })
    const emailExist = await Account.exists({ Email: Email })
    if( passwordExist ) return res.status(400).send(`Password already exists`)
    if( emailExist ) return res.status(400).send(`Email: ${Email} already exists`)
    const query = { Id: req.params.idAccount }
    if(Email){
        if(!(Email.includes('@') || Email.includes('.')) || !(Email.includes('.'))) return res.status(400).send(`Email not valide`)
    }
    const newAccount = {
        Name: ( !Name ? account.Name : Name ),
        Password: ( !Password ? account.Password : Password ),
        Email: ( !Email ? account.Email : Email )
    }
    await Account.findOneAndUpdate( query, newAccount )
    res.status(200).send(`Account with Id: "${req.params.idAccount}" editado con exito`)
})

AccountRouter.delete('/delete/all', async(req, res) => {
    await Account.deleteMany({})
    const accounts = await Account.find({})
    res.status(200).send(accounts)
})

AccountRouter.delete('delete/:idAccount', async(req, res)=>{
    const { idAccount } = req.params
    const account = await Account.findOne({ Id: idAccount })
    if(!account) return res.status(400).send(`Account with Id:${idAccount} don't exists`)
    await Account.findOneAndDelete({ Id: idAccount })
    res.status(200).send(`Account with Id:${idAccount} succesfully deleted`)
})

export default AccountRouter