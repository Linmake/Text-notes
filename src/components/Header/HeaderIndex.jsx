import styled from 'styled-components'
import '../../styles/components/header/HeaderInicio.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Logo from './Components/Logo'
import LinksIndex from './Components/LinksIndex'
import { UseData } from '../../context/dataContext'

const Header = styled.nav`
  height: 99px;
  display: flex;
  background: rgb(251,120,80);
  background: linear-gradient(90deg, rgba(251,120,80,1) 0%, rgba(242,179,50,1) 100%);
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
          <Logo/>
          <LinksIndex mainRoute={mainRoute} login={login} nameAccount={Name} />
        </NavContainer>
      </Header>
    </>
  )
}
export default HeaderIndex