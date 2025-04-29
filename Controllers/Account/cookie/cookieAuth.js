

export default function cookieAuth() {
    const cookieBody = {
        httpOnly: true,
        secure: false, //true in production!
        maxAge: 2_592_000_000,
        sameSite: 'Strict'
    }
    return  cookieBody
}
