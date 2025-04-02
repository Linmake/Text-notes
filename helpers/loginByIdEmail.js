import Account from '../Schema/AccountSchema.js'

export const loginByIdEmail = async( body ) => {
	try{
		const accountById = await Account.findOne({ Id: body.Id })
		const accountByEmail = await Account.findOne({ Email: body.Email })
		if (accountById) res.status(400).send(`Account with Id: ${body.Id} already exists`)
			if( accountByEmail ) res.status(400).send(`Account with Email: ${body.Email} already exists`)
				const user = body 
			return user
		}catch(err){
			return res.status(500).send(err.message)
		}
}
