import Account from '../Schema/AccountSchema'

const authById = async(body) => {
    const { Id } = body
    const user = await Account.findOne({ Id: Id})
    if(!user) {
        return res.send(`Name with Id: ${Id} don't exists`)
    }
    return user
}

export default authById