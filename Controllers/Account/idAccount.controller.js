const idAccountController = (req, res) => {
    const cookies = req.cookies
    if(!cookies){
        return res.status(401).send("Incorrect Credentials")
    }
    const { JWT } = cookies
    if(!JWT){
        return res.status(401).send("Incorrect Credentials")
    }
    return res.status(200).send(JWT)
}

export default idAccountController