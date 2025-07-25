import axios from "axios"
import { v4 as uuidv4 } from 'uuid';
const SignUp = async(email, pwd, name) => {
    try{
      const account = {
        Email: email,
        Password: pwd,
        Name: name,
      }
      const res = await axios.post("http://localhost:4000/account/signup", account, {
        withCredentials: true
    })  
      return res
    }catch(err){
      return console.log(err)
    }
}
export default SignUp  