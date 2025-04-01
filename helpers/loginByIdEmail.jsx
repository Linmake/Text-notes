import Account from '../Schema/AccountSchema'

export const loginByIdEmail = async( body ) => {
	const accountById = await Account.findOne({ Id: body.Id })
	const accountByEmail = await Account.findOne({ Email: body.Email })
	if (accountById) res.status(400).send(`Account with Id: ${body.Id} already exists`)
	if( accountByEmail ) = res.status(400).send(`Account with Email: ${body.Email} already exists`)
	return
}
