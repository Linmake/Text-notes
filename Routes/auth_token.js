import { SignJWT } from "jose";

const authToken = async(Id) => {

    const jwtContructor = new SignJWT({ Id })
    const jwt = await jwtContructor
    .setProtectedHeader({alg: 'HS256', typ: 'jwt', })
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(new TextDecoder(process.env.JWT_PRIVATE_KEY).decode)
    return jwt

}

export default authToken