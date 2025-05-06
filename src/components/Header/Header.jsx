import styled from 'styled-components'
import '../../styles/components/header/HeaderInicio.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
//Pantalla Laptop: 1080*1920
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
  gap: 57%;
`

const SectionNotas = styled.ul`
  display: flex;
  width: 20%;
  justify-content: space-around;
  margin-right: 150px;
`

const Links = styled.a`
  display: block;
  box-sizing: border-box;
  color: #FFFF !important;
  font-weight: 400;
  width: fit-content;
  height: 20px;
  &:hover{
    border-bottom: 1px solid white;
  }
`

const LogoFont = styled.a`
  font-size: 35px;
  color: #FFFF;
  margin-left: 70px;
  &:hover{
    color: #ECECEC;
  }
`
const DropDownMenu = styled.ul`
  min-width: 8rem;
  position: absolute; 
  top: 3.2vh !important;
`

const ContainerAccount = styled.li`
  display: flex;
  flex-direction: row;
`

const HeaderComponent = () => {
  const RutaPrincipal = "http://localhost:4001"
  const [login, setLogin] = useState(true)
  const [Name, setName] = useState("User")
  useEffect( () => {
    //peticion a la bd para verificar si el JWT existe y es valido en las cookies
    const fetchAccount = async() => {
      const res = await axios.get("http://localhost:4000/account/login", {withCredentials: true})
      const {Name} = res.data
      setName(Name)
    }
    const fetchJWT = async() => {
      const res = await axios.get("http://localhost:4000/account/token", {withCredentials: true})
      const { status, JWT } = res.data
      if(!status){
        return setLogin(false)
      }
      setLogin(true)
      fetchAccount()      
    }

    fetchJWT()
    //traer la cuenta
    //colocar el nombre de la cuenta
  },[setLogin])

  return (
    <>
      <Header className="navbar navbar-expand-lg bg-body-tertiary">
        <NavContainer className="container-fluid">
          <LogoFont className="navbar-brand" href="/">
            Notes
          </LogoFont>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <SectionNotas className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Links className="nav-link active" aria-current="page" href={`${RutaPrincipal}/#Create`}>Model</Links>
            </li>
            <li className="nav-item dropdown">
              <Links className="nav-link dropdown-toggle" href={`${RutaPrincipal}/Notes/`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                My Notes
              </Links>
              <DropDownMenu className="dropdown-menu">
                <li><a className="dropdown-item" href={`${RutaPrincipal}/Projects-menu/`}>Projects</a></li>
                <li><a className="dropdown-item" href={`${RutaPrincipal}/Folders/`}>Folders</a></li>
              </DropDownMenu>
            </li>
            <ContainerAccount className="nav-item">
             { (!login) ? (
              <>
              <Link className="nav-link" to={`${RutaPrincipal}/Account/signup/email`}>Sign up</Link>
              <Link className="nav-link" to={`${RutaPrincipal}/Account/signin/`}>Login</Link>
              </>
             ) : (
               <Link className="nav-link" to={`${RutaPrincipal}/projects-menu`}>{Name}</Link> 
              )
            }
            </ContainerAccount>
          </SectionNotas>
        </NavContainer>
      </Header>
    </>
  )
}
export default HeaderComponent