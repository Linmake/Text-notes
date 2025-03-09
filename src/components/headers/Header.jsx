import styled from 'styled-components'
import '../../styles/components/header/HeaderInicio.css'
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


const HeaderComponent = () => {
  const RutaPrincipal = "http://localhost:4001"
  return (
    <>
      <Header className="navbar navbar-expand-lg bg-body-tertiary">
        <NavContainer className="container-fluid">
          <LogoFont className="navbar-brand" href="/">Notas</LogoFont>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <SectionNotas className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Links className="nav-link active" aria-current="page" href={`${RutaPrincipal}/#Crear`}>Modelo</Links>
            </li>
            <li className="nav-item dropdown">
              <Links className="nav-link dropdown-toggle" href={`${RutaPrincipal}/Notes/`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Mis notas
              </Links>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href={`${RutaPrincipal}/Proyects-menu/`}>Proyectos</a></li>
                <li><a className="dropdown-item" href={`${RutaPrincipal}/Folders/`}>Carpetas</a></li>
              </ul>
            </li> 
            <li className="nav-item">
              <Links className="nav-link dropdown-toggle" href={`${RutaPrincipal}/cuenta/`}>
                Cuenta
              </Links>
            </li>
          </SectionNotas>
        </NavContainer>
      </Header>
    </>
  )
}

export default HeaderComponent