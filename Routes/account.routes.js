import Account from '../Schema/AccountSchema'
import express from 'express'

const AccountRouter = express.Router()

AccountRouter.get("all", async(req, res) => {
    const allAccounts = await Accounts.find({})
    res.status(200).send(allAccounts)
})

AccountRouter.get("/:idAccount/all", async(req, res) => {
    const { idAccount } = req.params
    const account = Account.findOne({ Id: idAccount })
    
})