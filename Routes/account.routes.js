import Account from '../Schema/AccountSchema.js'
import Express from "express"
import { v4 as uuidv4 } from 'uuid';
import accountValidation from '../DTO/AccountValidation.js';

const AccountRouter = Express.Router()

AccountRouter.get("/all", async(req, res) => {
    const allAccounts = await Account.find({})
    res.send(allAccounts)
})

AccountRouter.get("/:idAccount", async(req, res) => {
    const { idAccount } = req.params
    const account = await Account.findOne({ Id: idAccount })
    if(!account) return res.status(400).send(`Account with Id: ${idAccount} don't exist`)
    return res.send(account).sendStatus(200)
})

AccountRouter.post("/create", accountValidation,async(req, res) => {
    try{
        const { Id, Name, Password, Email, Role } = req.body
        if( !Id || !Name || !Password || !Email || !Role) return res.sendStatus(401)
        const valideEmail = await Account.exists({ Email: Email })
        if( valideEmail ) return res.sendStatus(401)

        if(/[.,<>/?_'";:{}[\]\-=\+@!#$%^&*()`¿]/.test(Password)) return res.sendStatus(401)
        const valideId = await Account.exists({ Id: Id })
        if (valideId) return res.sendStatus(401)
        const newAccount = new Account({
            Id,
            Name,
            Password,
            Email,
            Role
        })
        await newAccount.save()
        return res.send(newAccount).json()
    }catch(err){
        res.sendStatus(400)
    }
})
AccountRouter.put('/edit/:idAccount', async(req, res)=> {
    const { Name, Password, Email } = req.body
    const account = await Account.findOne({
        Id: req.params.idAccount
    })
    if(!account) return res.send(`Name with Id: ${req.params.idAccount} don't exist`)
    const NameExist = await Account.exist({ Name: Name })
    const passwordExist = await Account.exist({ Password: Password })
    const emailExist = await Account.exist({ Email: Email })
    if( NameExist ) return res.status(400).send(`Name: ${Name} already exist`)
    if( passwordExist ) return res.status(400).send(`Password: ${Password} already exist`)
    if( emailExist ) return res.status(400).send(`Email: ${Email} already exist`)
    const query = { Id: req.params.idAccount }
    const newAccount = {
        Name: ( (!Name) ? account.Name : Name ),
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