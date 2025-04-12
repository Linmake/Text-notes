import { jwtVerify } from "jose"

const userJWTDTO = async(res, req, next) => {
	try{
		if(!(req.cookies.jwt)) return res.status(401)
		const jwt = req.cookies.jwt
		const encoder = new TextEncoder 
		const { payload } = await jwtVerify(
		jwt, 
		encoder.encoder(process.env.JWT_PRIVATE_KEY)
		)
 		req.Id = payload.Id
		next()
	}catch(err){
		return 	
	}
}

export default userJWTDTO
