import { hash } from 'bcrypt'
import Account from '../../Schema/AccountSchema.js'
import { v4 as uuidv4 } from 'uuid'
export const signupByEmail = async( body ) => {
		const { Email, Password, Name } = body
		const existAccount = await Account.findOne({ Email: Email })
        if (existAccount) return res.status(401).send(`Account with Email: ${Email} already exists`)
        const hashPassword = await hash(Password, 8)
        const account = new Account({
            Id: uuidv4(),
            Name,
            Password: hashPassword,
            Email, 
            Role: "User"
        })
		return account
}