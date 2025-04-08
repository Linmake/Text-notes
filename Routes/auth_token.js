import { SignJWT } from "jose";

const authToken = async(Id) => {
    const secret = process.env.JWT_PRIVATE_KEY;

    if (!secret) {
      throw new Error("JWT_PRIVATE_KEY no está definido en .env");
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