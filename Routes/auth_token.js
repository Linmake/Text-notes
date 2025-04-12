import { SignJWT } from "jose";

const authToken = async(Id) => {
    const secret = process.env.JWT_PRIVATE_KEY;

    if (!Id) {
      return res.status(401).send("Id not avaible")
    }
    if (!secret) {
      return res.status(401).send("Id not avaible")
    }
    const jwtContructor = new SignJWT({ Id })
    const jwt = await jwtContructor
    .setProtectedHeader({alg: 'HS256', typ: 'jwt', })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(new TextEncoder().encode(secret))
    return jwt
}

export default authToken