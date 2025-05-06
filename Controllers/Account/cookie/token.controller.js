export default function tokenController(req, res) {
    try{
        const { JWT } = req.cookies
        if(!JWT) return res.status(200).send(
            {
                status: false,
                 JWT: ''
            })
        return res.status(200).send(
            {
                status: true,
                JWT: JWT
            })
    }catch(err){
        console.log(`Error: ${err}`)
    }
}
