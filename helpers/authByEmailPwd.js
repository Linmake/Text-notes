import Account from '../Schema/AccountSchema'

const authByEmailPwd = async(Email, Password) => {
    const user = await Account.findOne({ Email: Email})
    if(!user) {
        res.status(401)
    }

    if(user.Password !== Password){
        res.status(401)
    }
    return user
}

export default authByEmailPwd