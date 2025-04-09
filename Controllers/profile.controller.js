import Account from "../Schema/AccountSchema.js"

const profileController = async(req, res) => {
    try{
        const { Id } = req
        const account = await Account.findById(Id)
        if(!account) return res.status(401).send("Incorrect credentials")
        
        return res.status(200).send(allAccounts)
    }catch(err){
        return res.status(400).send(err)
    }
}

export default profileController