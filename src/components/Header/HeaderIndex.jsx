import styled from 'styled-components'
import '../../styles/components/header/HeaderInicio.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Logo from './Components/Logo'
import LinksIndex from './Components/LinksIndex'
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
`
const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 50%;
`

const HeaderIndex = ({mainRoute}) => {
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
          <LinksIndex mainRoute={mainRoute} login={login} nameAccount={Name} />
          <Account marginLeft={"5%"} mainRoute={mainRoute} nameAccount={Name} />
        </NavContainer>
      </Header>
    </>
  )
}
export default HeaderIndex