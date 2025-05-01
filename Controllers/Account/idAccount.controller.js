import { decodeJwt } from "jose"

const idAccountController = (req, res) => {
    const cookies = req.cookies
    if(!cookies){
        return res.status(401).send("Incorrect Credentials")
    }
    const { JWT } = cookies
    if(!JWT){
        return res.status(401).send("Incorrect Credentials")
    }

    const { Id } = decodeJwt(JWT)

    return res.status(200).send(Id)
}

export default idAccountController