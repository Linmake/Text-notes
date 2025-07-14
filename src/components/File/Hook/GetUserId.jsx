import axios from "axios"

const GetUserId = async() => {
    const { data } = await axios.get("http://localhost:4000/account/idAccount", { withCredentials: true })
    return data
}

export default GetUserId