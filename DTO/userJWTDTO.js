import { jwtVerify } from "jose"

const userJWTDTO = async(req, res, next) => {
	try{

		if( !(req.cookies.JWT) ) {
			return res.status(401).send('JWT not avaible')
		}
		const jwt = req.cookies.JWT
		if( !(jwt) ) {
			return res.status(401).send('JWT not avaible')
		}
		const { payload } = await jwtVerify(
			jwt, 
			new TextEncoder().encode(process.env.JWT_PRIVATE_KEY)
		)
 		req.Id = payload.Id
		
		next()
	}catch(err){
		return res.status(403).send(`Error: ${err}`) 	
	}
}

export default userJWTDTO
