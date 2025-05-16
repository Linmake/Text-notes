import Account from '../../Schema/AccountSchema.js'
/**
 * 
 * @param {*} body Verify that the account creation email already exists
 * @returns 
 */
export const isSignupByEmail = async( body ) => {
	try{
		const accountByEmail = await Account.findOne({ Email: body.Email })
		if( accountByEmail ) {
			return true
		}
		return false
		}catch(err){
			return false
		}
}