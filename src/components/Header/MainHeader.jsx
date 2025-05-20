import styled from 'styled-components'
import '../../styles/components/header/HeaderInicio.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import MainLinks from './Components/MainLinks'
import { UseData } from '../../context/dataContext'
import Account from '../Account/Accounts/Account'

const Header = styled.nav`
  height: 99px;
  display: flex;
  background-color: white;
  padding: 0px;
  width: 100%;
  border-bottom: 2px solid white;
  user-select: none;
  position: fixed;
`
const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 50%;
`

const MainHeader = ({mainRoute}) => {
  const {login, setLogin} = UseData()
  const [Name, setName] = useState("User")
  useEffect( () => {
    const fetchAccount = async() => {
      const res = await axios.get("http://localhost:4000/account/login", {withCredentials: true})
      const {Name} = res.data
      setName(Name)
    }
    const fetchJWT = async() => {
      const res = await axios.get("http://localhost:4000/account/token", {withCredentials: true})
      const { status } = res.data
      if(!status){
        return setLogin(false)
      }
      setLogin(true)
      fetchAccount()
    }
    fetchJWT()
  },[setLogin])
  return (
    <>
      <Header className="navbar navbar-expand-lg bg-body-tertiary">
        <NavContainer className="container-fluid">
          <MainLinks mainRoute={mainRoute} login={login} nameAccount={Name} />
          <Account marginLeft={"0"} mainRoute={mainRoute} nameAccount={Name} />
        </NavContainer>
      </Header>
    </>
  )
}
export default MainHeader