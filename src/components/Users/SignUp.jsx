import { useEffect } from "react"
import { UseData } from "../../context/dataContext"
import axios from "axios"
import { v4 as uuidv4 } from 'uuid';

const SignUp = () => {
  const { pwd, email, name } = UseData()

  useEffect( async() => {
    try{

      const account = {
        Id: uuidv4(),
        Email: email,
        Password: pwd,
        Name: name,
        Role: "user"
      }
      const res = await axios.post("http://localhost:4000/account/create", account)
    }catch(err){
      return res.status(401)
    }
  }, [])
  
  return (
    <div>

    </div>
  )
}

export default SignUp
