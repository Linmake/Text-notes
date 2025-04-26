import { SignJWT } from "jose";

const authToken = async(Id) => {
    const secret = process.env.JWT_PRIVATE_KEY;

    if (!Id || !secret) {
      return res.status(400).send("Id or secret key is missing")
    }
    try {
      const jwt = await new SignJWT({ Id })
          .setProtectedHeader({ alg: 'HS256', typ: 'jwt' })
          .setIssuedAt()
          .setExpirationTime('3d') // JWT expirará en 3 días
          .sign(new TextEncoder().encode(secret)); // Firma el JWT

      return jwt;
  }catch(err){
      console.error("Error generating JWT: ", error);
        throw new Error("Error generating JWT");
    }
}

export default authToken