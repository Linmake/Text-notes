import Account from '../Schema/AccountSchema.js'
/**
 * @param {Object} body 
 * @returns Account
 */
export const putEmailPwdAlready = async( body, Id, res ) => {
        const account = await Account.findOne({Id: Id})
        if(!account) return res.status(400).send(`Account with Id: ${Id} don't exists`)

        if(body.Email){
            if((body.Email.includes('@') && body.Email.includes('.')) ) {
                if( body.Email === account.Email ){
                    res.status(400).send(`Email: ${body.Email} is already used`)
                }
            }
        }
        
        if(body.Password){
            if( body.Password === account.Password ) return res.status(400).send(`Password is already used`)
        }

        return account
}