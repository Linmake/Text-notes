const emailExistsController = () => async( req, res ) => {
	try{
        const { Email } = req.body
		const accountByEmail = await Account.findOne({ Email: Email })
        if( accountByEmail ) {
            return res.send(true)
        }
        return res.send(false)
    }catch(err){
        return res.send(false)
    }
}

export default emailExistsController