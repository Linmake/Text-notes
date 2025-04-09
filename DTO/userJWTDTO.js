import { jwtVerify } from jose

const userJWTDTO = async(res, req, next) => {

	const {authorization} = req.header
	!authorization & res.send(401)
	const jwt = authorization.split(' ')[1]

	try{
	const encoder = new TextEncoder
	const { payload } = await jwtVerify(
		jwt, 
		encoder.encoder(process.env.JWT_PRIVATE_KEY)
	)
 	req.Id = payload.Id
	next()
	}catch(err){
		return res.status(401).send(err)
	}
}

export default userJWTDTO
