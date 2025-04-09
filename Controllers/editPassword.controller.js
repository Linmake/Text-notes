import Account from "../Schema/AccountSchema.js"

const editPasswordController = async(req, res)=> {
    const { Name, Password, Email } = req.body
    const { idAccount } = req.params
    const account = await putEmailPwdAlready(req.body, idAccount, res)
    if(!account) return res.status(400).send(`Account with Id:${idAccount} don't exists`)
    const query = { Id: req.params.idAccount }

    const newAccount = {
        Name: ( !Name ? account.Name : Name ),
        Password: ( !Password ? account.Password : Password ),
        Email: ( !Email ? account.Email : Email )
    }

    await Account.findOneAndUpdate( query, newAccount )
    res.status(200).send(newAccount)
}

export default editPasswordController